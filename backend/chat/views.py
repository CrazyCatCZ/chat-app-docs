from django.shortcuts import render
from rest_framework import viewsets

from .models import Message
from .serializers import MessageSerializer 


def index(request):
    return render(request, 'chat/index.html')

def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })

