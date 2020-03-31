from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from .models import Player
from .serializers import PlayerSerializer


@api_view(["GET"])
def players_list(request):
    all_players = Player.objects.all()
    serializer = PlayerSerializer(all_players, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    user_profile = get_object_or_404(Player, user_id=request.user)
    serializer = PlayerSerializer(user_profile, many=False)
    return JsonResponse(serializer.data, safe=False)
