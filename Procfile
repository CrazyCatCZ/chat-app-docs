release: python manage.py migrate
web: daphne backend.asgi:channel_layer --port $PORT --bind 0.0.0.0 -v2
worker: python manage.py runworker channel_layer