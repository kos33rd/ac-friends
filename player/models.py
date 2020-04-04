from django.contrib.auth.models import User
from django.db import models


class Fruit(models.Model):
    id = models.AutoField(primary_key=True, default=None)
    name = models.CharField(max_length=64)
    icon = models.CharField(max_length=8)

    def __str__(self):
        return self.name


class Player(models.Model):
    id = models.AutoField(primary_key=True, default=None)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    is_visible = models.BooleanField(default=False)
    nickname = models.CharField(max_length=200)
    friend_code = models.CharField(max_length=64, null=True)
    language = models.CharField(max_length=64)
    creation_date = models.DateField(default=None, null=True)
    bump_date = models.DateField(default=None, null=True)
    commentary = models.TextField(default=None, null=True, blank=True)
    avatar_url = models.CharField(max_length=2048, null=True)
    fruits = models.ManyToManyField(to='player.Fruit', related_name='player_fruits')

    def __str__(self):
        return self.nickname
