from rest_framework import serializers
from manager.models import Day 

# Lead Serializer
class DaySerializer(serializers.ModelSerializer):
  class Meta:
    model = Day 
    fields = '__all__'