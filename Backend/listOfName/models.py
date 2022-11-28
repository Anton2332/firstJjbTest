from django.contrib.auth.models import User
from django.db import models


class Name(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)


class Rank(models.Model):
    name = models.ForeignKey('Name', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rankNumber = models.IntegerField()

