from datetime import datetime
from django.contrib.auth.models import User
from django.db import models


class Player(models.Model):
    id = models.AutoField(primary_key=True, default=None)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    is_visible = models.BooleanField(default=False)
    nickname = models.CharField(max_length=200)
    nintendo_id = models.CharField(max_length=64, null=True)
    language = models.CharField(max_length=64)
    creation_date = models.DateField(default=None, null=True)
    bump_date = models.DateField(default=None, null=True)
    commentary = models.TextField(null=True)
    avatar_url = models.CharField(max_length=2048, null=True)

    def __str__(self):
        return self.nickname
