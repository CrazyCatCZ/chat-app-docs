from django.urls import re_path, path
from . import consumers

websocket_urlpatterns = [
    path('ws/chat/<room_name>/', consumers.ChatConsumer.as_asgi()),
    #re_path(r'wss/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()),
    #path('ws/chat/messages/', consumers.DRFConsumer.as_asgi()),
]