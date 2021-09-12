from django.core.asgi import get_asgi_application
django_asgi_app = get_asgi_application()

import os
from channels.layers import get_channel_layer
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import public_chat.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

import django
django.setup()

application = ProtocolTypeRouter({
  "http": django_asgi_app,
  "websocket": AuthMiddlewareStack(
        URLRouter(
            public_chat.routing.websocket_urlpatterns,
        )
    ),
})