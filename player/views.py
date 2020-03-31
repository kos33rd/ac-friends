from rest_framework.decorators import api_view
from django.http import JsonResponse

from .models import Player
from .serializers import PlayerSerializer


@api_view(["GET"])
def sample_api(request):
    print(request.user, request.auth)
    all_players = Player.objects.all()
    serializer = PlayerSerializer(all_players, many=True)
    return JsonResponse(serializer.data, safe=False)
