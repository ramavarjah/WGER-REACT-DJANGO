from django.db import models
from django.contrib.auth.models import User


class Day(models.Model):
    description = models.CharField(max_length=100, unique= True)
    day = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="manager", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

