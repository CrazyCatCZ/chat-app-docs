from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User 


class Message(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    text = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.user} - {self.text}'


class PublicChatRoom(models.Model):
    name = models.CharField(max_length=100)
    messages = models.ManyToManyField(Message, blank=True)

    def __str__(self):
        return self.name