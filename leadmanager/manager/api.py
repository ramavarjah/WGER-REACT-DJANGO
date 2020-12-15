from manager.models import Day
from rest_framework import viewsets, permissions
from .serializers import DaySerializer

# Day Viewset


class DayViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = DaySerializer

    def get_queryset(self):
        return self.request.user.manager.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
