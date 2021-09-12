release: python manage.py migrate
<<<<<<< HEAD
web: daphne backend.asgi:application --port $PORT --bind 0.0.0.0 
=======
web: daphne backend.asgi:application --port $PORT --bind 0.0.0.0 -v2
>>>>>>> 39b933a3957beb87cdc7bbc42a3786f3bb2487b2
worker: python manage.py runworker channel_layer