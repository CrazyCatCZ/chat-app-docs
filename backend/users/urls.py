from django.urls import path, include
from .views import CustomAuthToken

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('token-auth/', CustomAuthToken.as_view()),
    path('register/', include('dj_rest_auth.registration.urls'))
]