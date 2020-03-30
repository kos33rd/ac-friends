from django.contrib.auth.models import User
from django.db import models


class Player(User):
    nickname = models.CharField(max_length=200)
