from rest_framework import serializers
from .models import Message, PublicChatRoom


class MessageSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user')

    class Meta:
        model = Message
        fields = ['id', 'username', 'text', 'date']


class PublicChatRoomSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True)

    class Meta:
        model = PublicChatRoom
        fields = ['name', 'messages']