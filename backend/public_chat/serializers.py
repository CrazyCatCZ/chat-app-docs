from .models import Message, PublicChatRoom
from rest_framework import serializers


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class PublicChatRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicChatRoom
        fields = '__all__'