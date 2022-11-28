from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.SimpleRouter()

router.register(r'names', NameViewSet, basename='nameViewSet')

urlpatterns = [
    path('', include(router.urls)),
    path('rankOfNames/', RankViewSet.as_view({'get': 'list'})),
    path('updateRank/', RankViewSet.as_view({'put': 'update'}))
]
