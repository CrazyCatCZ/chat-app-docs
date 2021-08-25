from django.shortcuts import render
from rest_framework import viewsets
from djangochannelsrestframework import permissions
from djangochannelsrestframework.generics import GenericAsyncAPIConsumer
from djangochannelsrestframework.mixins import (
    ListModelMixin,
    PatchModelMixin,
    UpdateModelMixin,
    CreateModelMixin,
    DeleteModelMixin,
)

from .models import Message
from .serializers import MessageSerializer 


def index(request):
    return render(request, 'chat/index.html')

def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })

class LiveConsumer(ListModelMixin, GenericAsyncAPIConsumer):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer(queryset, many=True)
    permission_classes = (permissions.IsAuthenticated,)