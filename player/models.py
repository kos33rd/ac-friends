from django.contrib.auth.models import User
from django.db import models


class Player(models.Model):
    id = models.AutoField(primary_key=True, default=None)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    nickname = models.CharField(max_length=200)

    def __str__(self):
        return self.nickname
