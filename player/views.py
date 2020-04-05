from datetime import datetime

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from .models import Player, Fruit
from .serializers import PlayerSerializer, FruitSerializer


@api_view(["GET"])
def players_list(response):
    all_players = Player.objects.order_by('-bump_date').filter(is_visible=True)[:100]
    serializer = PlayerSerializer(all_players, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(["GET", "PUT"])
@permission_classes([IsAuthenticated])
def profile(request):
    user_profile = get_object_or_404(Player, user_id=request.user)

    if request.method == 'GET':
        serializer = PlayerSerializer(user_profile, many=False)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'PUT':
        serializer = PlayerSerializer(user_profile, many=False, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({})
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def bump_profile(request):
    user_profile = get_object_or_404(Player, user_id=request.user)

    if request.method == 'POST':
        user_profile.bump_date = datetime.now()
        user_profile.save()
        return JsonResponse({})


@api_view(["GET"])
def fruits(response):
    all_fruits = Fruit.objects.all()
    serializer = FruitSerializer(all_fruits, many=True)
    return JsonResponse(serializer.data, safe=False)
