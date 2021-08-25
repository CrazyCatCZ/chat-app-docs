from django.shortcuts import render
from rest_framework import viewsets

from .models import Message, PublicChatRoom
from .serializers import MessageSerializer, PublicChatRoomSerializer


def index(request):
    return render(request, 'chat/index.html')

def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class PublicChatRoomViewSet(viewsets.ModelViewSet):
    queryset = PublicChatRoom.objects.all()
    serializer_class = PublicChatRoomSerializer