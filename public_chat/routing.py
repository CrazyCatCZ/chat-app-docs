from django.urls import re_path, path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()),
    re_path(r'wss/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()),
    #path('ws/chat/messages/', consumers.DRFConsumer.as_asgi()),
]