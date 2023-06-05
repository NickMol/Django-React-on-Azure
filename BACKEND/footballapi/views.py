from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import *
from .models import *
from django.shortcuts import get_object_or_404
from rest_framework import viewsets

# Create your views here.
class ClubList(viewsets.ViewSet): 
   permission_classes = [permissions.AllowAny]
   queryset = Clubs.objects.all()

   def list(self,request): 
      serializer = ClubSerializer(self.queryset, many=True)
      return Response(serializer.data)