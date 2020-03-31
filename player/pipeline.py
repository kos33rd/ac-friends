from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

from player.models import Player


def populate_player(user, details, **kwargs):

    user = User.objects.get(username=user)
    print(user, user.first_name)

    try:
        player = Player.objects.get(user_id=user.id)
    except ObjectDoesNotExist:
        player = Player(user_id=user, nickname=user.first_name)
        player.save()
    print(player)
