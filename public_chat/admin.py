from django.contrib import admin
from .models import Message, PublicChatRoom

admin.site.register(Message)
admin.site.register(PublicChatRoom)