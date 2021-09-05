from django.urls import path, include
from . import views
from .views import CustomAuthToken
from rest_framework.routers import SimpleRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = SimpleRouter(trailing_slash=False)

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('current-user/', views.current_user, name="current_user"),
    path('token-auth/', CustomAuthToken.as_view(), name="token_auth"),
    path('register/', include('dj_rest_auth.registration.urls'))
]

urlpatterns += router.urls