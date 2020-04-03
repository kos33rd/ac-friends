from rest_framework import serializers

from .models import Player, Fruit


class FruitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fruit
        fields = [
            'id',
            'name',
            'icon',
        ]


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
            'fruits'
        ]
