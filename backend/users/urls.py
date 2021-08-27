from django.urls import path, include
from .views import CookieTokenObtainPairView, CookieTokenRefreshView, CustomAuthToken

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('token-auth/', CustomAuthToken.as_view()),
    path('obtain-token/', CookieTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh-token/', CookieTokenRefreshView.as_view(), name='token_refresh'),
    path('register/', include('dj_rest_auth.registration.urls'))
]