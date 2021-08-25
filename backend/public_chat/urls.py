from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views
from .views import MessageViewSet, PublicChatRoomViewSet

router = DefaultRouter()
router.register('messages', MessageViewSet)
router.register('public-chatroom', PublicChatRoomViewSet)

'''
urlpatterns = [
    path('lobby/', views.index, name='index'),
    path('room/<str:room_name>/', views.room, name='room'),
]
'''

urlpatterns = router.urls