from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from .models import Message, PublicChatRoom
from .serializers import MessageSerializer, PublicChatRoomSerializer


def index(request):
    return render(request, 'chat/index.html')

def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class PublicChatRoomViewSet(viewsets.ModelViewSet):
    queryset = PublicChatRoom.objects.all()
    serializer_class = PublicChatRoomSerializer
    pagination_class = PageNumberPagination