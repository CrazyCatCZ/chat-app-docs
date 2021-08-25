from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User 


class Message(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    text = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.user} - {self.text}'