from rest_framework import serializers

from .models import Player


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            'id',
            'nickname',
            'is_visible',
            'nintendo_id',
            'language',
            'creation_date',
            'bump_date',
            'commentary',
            'avatar_url',
        ]
