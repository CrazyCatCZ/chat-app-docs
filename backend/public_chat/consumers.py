import json
from django.contrib.auth.models import User 

from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import Message, PublicChatRoom


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        user = data['user']
        text = data['text']
        room_name = data['room_name']

        print(user, text, room_name)

        await self.save_message(user, text, room_name)

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'text': text,
                'user': user
            }
        )

    # Receive message from room group
    async def chat_message(self, event):
        text = event['text']
        user = event['user']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'text': text,
            'user': user,
        }))
    
    @sync_to_async
    def save_message(self, user, text, room_name):
        user = User.objects.get(username=user) 
        room = PublicChatRoom.objects.get(name=room_name)

        message = Message.objects.create(user=user, text=text)
        room.messages.add(message)
        
        message.save()
        room.save()