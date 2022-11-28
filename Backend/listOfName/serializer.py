from rest_framework import serializers

from .models import *


class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Name
        fields = '__all__'


class RankSerializer(serializers.ModelSerializer):
    name = NameSerializer()

    class Meta:
        model = Rank
        fields = '__all__'


class RankUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = '__all__'


