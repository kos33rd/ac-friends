from django.contrib.auth.models import User
from django.db import models


class Fruit(models.Model):
    id = models.AutoField(primary_key=True, default=None)
    name = models.CharField(max_length=64)
    icon = models.CharField(max_length=8)

    def __str__(self):
        return self.name


class Player(models.Model):

    PLAYTIME_DURING_DAY = 1
    PLAYTIME_IN_THE_MORNING = 2
    PLAYTIME_IN_THE_EVENING = 3
    PLAYTIME_AT_NIGHT = 4
    PLAYTIME_ALL_DAY_LONG = 5
    PLAYTIME_STATUS = [
        (PLAYTIME_DURING_DAY, 'During the day'),
        (PLAYTIME_IN_THE_MORNING, 'In the morning'),
        (PLAYTIME_IN_THE_EVENING, 'In the evening'),
        (PLAYTIME_AT_NIGHT, 'At night'),
        (PLAYTIME_ALL_DAY_LONG, 'All day long 😵'),
    ]

    PLAYDAYS_EVERY_DAY = 1
    PLAYDAYS_ON_WEEKENDS = 2
    PLAYDAYS_ON_WEEKDAYS = 3
    PLAYDAYS_STATUS = [
        (PLAYDAYS_EVERY_DAY, 'Every day'),
        (PLAYDAYS_ON_WEEKENDS, 'On weekends'),
        (PLAYDAYS_ON_WEEKDAYS, 'On weekdays'),
    ]

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
    fruits = models.ManyToManyField(to='player.Fruit', related_name='player_fruits', blank=True)
    playtime = models.IntegerField(choices=PLAYTIME_STATUS, default=PLAYTIME_DURING_DAY)
    playdays = models.IntegerField(choices=PLAYDAYS_STATUS, default=PLAYDAYS_EVERY_DAY)

    def __str__(self):
        return self.nickname
