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

        message_attributes = await self.save_message(user, text, room_name)

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'id': message_attributes['id'],
                'username': user,
                'text': text,
                #'date': message_attributes['date']
            }
        )

    # Receive message from room group
    async def chat_message(self, event):
        id = event['id']
        text = event['text']
        username = event['username']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'id': id,
            'text': text,
            'username': username,
        }))
    
    @sync_to_async
    def save_message(self, user, text, room_name):
        user = User.objects.get(username=user) 
        room = PublicChatRoom.objects.get(name=room_name)

        message = Message.objects.create(user=user, text=text)
        room.messages.add(message)
        
        message.save()
        room.save()

        return {'id': message.id, 'date': message.date}