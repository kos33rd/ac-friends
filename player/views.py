from rest_framework.decorators import api_view
from django.http import JsonResponse

from .models import Player
from .serializers import PlayerSerializer


@api_view(["GET"])
def players_list(request):
    all_players = Player.objects.all()
    serializer = PlayerSerializer(all_players, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(["GET"])
def profile(request):
    # TODO: Use current logged in user ID for profile request
    print(request.user, request.auth)

    profile = Player.objects.first()
    serializer = PlayerSerializer(profile, many=False)
    return JsonResponse(serializer.data, safe=False)
