from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

class Product(models.Model):
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=360)

class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    review = models.TextField(max_length=700)
    class Meta:
        unique_together = (('user', 'product'),)
        index_together = (('user', 'product'),)

