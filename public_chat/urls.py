from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from . import views
from .views import MessageViewSet, PublicChatRoomViewSet

router = DefaultRouter()
router.register('messages', MessageViewSet)
router.register('public-chatroom', PublicChatRoomViewSet)

urlpatterns = [
    #path('lobby/', views.index, name='index'),
    #path('room/<str:room_name>/', views.room, name='room'),
    path('get-first-chatroom/', views.get_first_chatroom, name="get-first-chatroom"),
]

urlpatterns += router.urls