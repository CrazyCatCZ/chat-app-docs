from rest_framework import serializers
from .models import Message, PublicChatRoom


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class NestedMessageSerializer(serializers.ModelSerializer):
     class Meta:
        model = Message
        fields = '__all__'

class PublicChatRoomSerializer(serializers.ModelSerializer):
    messages = NestedMessageSerializer(many=True)

    class Meta:
        model = PublicChatRoom
        fields = ['name', 'messages']