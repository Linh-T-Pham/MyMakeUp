from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Product, Rating
from .serializer import ProductSerializer, RatingSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # what kind of method
    @action(detail=True, methods=['POST'])
    def rate_product(self, request, pk=None):
        if 'stars' in request.data:

            product = Product.objects(id=pk)
            print('movie title', movie.title)


            response = {'message': 'awesome'}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Please provide stars'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
