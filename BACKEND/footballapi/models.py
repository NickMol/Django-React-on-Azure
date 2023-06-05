from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Country(models.Model):
    name = models.CharField(max_length=500, unique=True)
    created_at = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    edited_at = models.DateTimeField(auto_now=True)
   
    def __str__(self):
        return self.name
    
class League(models.Model):
    name = models.CharField(max_length=500, unique=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    edited_at = models.DateTimeField(auto_now=True)
   
    def __str__(self):
        return self.name

class Clubs(models.Model):
    name = models.CharField(max_length=500, unique=True)
    stadium = models.CharField(max_length=500, blank=True,null=True)
    attendance = models.CharField(max_length=500, blank=True,null=True)
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    edited_at = models.DateTimeField(auto_now=True)
   
    def __str__(self):
        return self.name
  

class Players(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500)
    age = models.IntegerField()
    club = models.ForeignKey(Clubs, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    edited_at = models.DateTimeField(auto_now=True)
   
    def __str__(self):
        return str(self.first_name) + " "+str(self.last_name)