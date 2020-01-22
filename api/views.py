from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Product, Rating
from .serializer import ProductSerializer, RatingSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def rate_product(self, request):
        response = {'message': 'its ok'}
        return Response(response, status=status.HTTP_200_OK)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
