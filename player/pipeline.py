from datetime import datetime

from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

from player.models import Player


def populate_player(user, response, **kwargs):
    user = User.objects.get(username=user)
    try:
        Player.objects.get(user_id=user.id)
    except ObjectDoesNotExist:
        player = Player(
            user_id=user,
            nickname=user.first_name,
            creation_date=datetime.now(),
            bump_date=datetime.now(),
            avatar_url=response['picture'],
            language=response['locale'],
        )
        player.save()
