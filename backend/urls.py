import os
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from dotenv import load_dotenv

load_dotenv()

ADMIN_PATH = os.getenv('ADMIN_PATH')

urlpatterns = [
    path(f'{ADMIN_PATH}/', admin.site.urls),
    path('chat/', include('public_chat.urls')),
    path('users/', include('users.urls')),
    path('api-auth/', include('rest_framework.urls')),

    path('robots.txt', TemplateView.as_view(template_name='static/text/robots.txt')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
