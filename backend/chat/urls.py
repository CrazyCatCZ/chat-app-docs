from django.urls import path

from . import views
from .views import LiveConsumer

urlpatterns = [
    path('lobby/', views.index, name='index'),
    path('room/<str:room_name>/', views.room, name='room'),
]