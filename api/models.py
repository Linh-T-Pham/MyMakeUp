from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

def upload_path(instance, filname):
    return '/'.join(['images', str(instance.title), filname])

class Product(models.Model):
    title = models.CharField(max_length=32)
    brand = models.CharField(max_length=32, blank=True)
    description = models.TextField(max_length=360)

    # Find how many ratings each product has
    def nums_of_ratings(self):
        ratings = Rating.objects.filter(product=self)
        return len(ratings)

    # Calculate average rating for each movie
    def avg_rating(self):
        cal_sum = 0
        ratings = Rating.objects.filter(product=self)
        for rating in ratings:
            cal_sum += rating.stars
        if len(ratings) > 0:
             return cal_sum / len(ratings)
        else:
            return 0

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True, upload_to=upload_path)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.TextField(max_length=700, blank=True)
    class Meta:
        unique_together = (('user', 'product'),)
        index_together = (('user', 'product'),)

