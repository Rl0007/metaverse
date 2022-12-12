from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = "whats_up"
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes= [
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes)

def add_product(request):
    return HttpResponse("hello")

def update_product(request):
    return HttpResponse("hello")

def read_product(request):
    return HttpResponse("hello")

def delete_product(request):
    return HttpResponse("hello")