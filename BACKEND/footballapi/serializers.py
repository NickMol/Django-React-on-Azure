from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import *
User = get_user_model()


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('name', 'id')

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ('name', 'id', 'country_id')

class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clubs
        fields = ('name', 'attendance','stadium', 'id')
      