import os

from channels.layers import get_channel_layer
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import public_chat.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

import django
django.setup()

application = ProtocolTypeRouter({
  "http": get_asgi_application(),
  "websocket": AuthMiddlewareStack(
        URLRouter(
            public_chat.routing.websocket_urlpatterns,
        )
    ),
})