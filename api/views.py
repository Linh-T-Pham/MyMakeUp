from django.shortcuts import render
from rest_framework import viewsets, status
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from .models import Product, Rating
from .serializer import ProductSerializer, RatingSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def post(self, request, *args, **kawrgs):
        image = request.data['image']
        title = request.data['title']
        Product.objects.create(title=title, image=image)
        return HttpResponse({'message': 'Product created'}, status=200)

    # what kind of method
    @action(detail=True, methods=['POST'])
    def rate_product(self, request, pk=None):

        if 'stars' in request.data:

            product = Product.objects.get(id=pk)
            print('product title', product.title)
            stars = request.data['stars']
            #user = request.user
            user = User.objects.get(id=1)
            print('user', user.username)

            try:
                rating = Rating.objects.get(user=user.id, product=product.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating updated', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)

            except:

                rating = Rating.objects.create(user=user, product=product, stars=stars)
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating created', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Please provide stars'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
