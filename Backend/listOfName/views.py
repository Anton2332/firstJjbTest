from rest_framework import viewsets, status
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import *

from django.shortcuts import render
from rest_framework.response import Response

from .serializer import *


class NameViewSet(viewsets.ModelViewSet):
    queryset = Name.objects.all()
    serializer_class = NameSerializer
    permission_classes = [IsAuthenticated]


class RankViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Rank.objects.all()
    serializer_class = RankSerializer

    def list(self, request):

        names = Name.objects.all()
        countOfNames = names.count()
        ranksCurrentUser = self.queryset.filter(user=request.user)
        countOfRanksCurrentUser = ranksCurrentUser.count()

        if countOfNames != countOfRanksCurrentUser:
            counter = 1
            for name in names:
                try:
                    rank = ranksCurrentUser.get(name_id=name.pk)
                except Rank.DoesNotExist:
                    rank = None
                if rank is None:
                    Rank.objects.create(name_id=name.pk, rankNumber=counter, user_id=request.user.id)
                counter += 1

        filtered = self.queryset.filter(user_id=request.user.id).order_by('rankNumber')
        serializer = self.serializer_class(filtered, many=True)
        return Response(serializer.data)

    def get_object(self, obj_id):
        try:
            return Rank.objects.get(id=obj_id)
        except (Rank.DoesNotExist, ValidationError):
            raise status.HTTP_400_BAD_REQUEST

    def validate_ids(self, id_list):
        for id in id_list:
            try:
                Rank.objects.get(id=id)
            except (Rank.DoesNotExist, ValidationError):
                raise status.HTTP_400_BAD_REQUEST
        return True

    def update(self, request, *args, **kwargs):
        data = request.data
        ids = [i['id'] for i in data]
        self.validate_ids(ids)
        instances = []
        for temp_dict in data:
            id = temp_dict['id']
            rankNumber = temp_dict['rankNumber']
            name = temp_dict['name']
            user = request.user

            obj = self.get_object(id)
            obj.rankNumber = rankNumber
            obj.name = Name.objects.get(id=name)
            obj.user = user
            obj.save()
            instances.append(obj)
        serializer = RankUpdateSerializer(instances, many=True)

        return Response(serializer.data)

