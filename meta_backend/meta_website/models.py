from codecs import charmap_build
from random import choices
from turtle import color
from django.db import models

# Create your models here.
class Customer(models.Model):
    id = models.IntegerField(primary_key= True)
    name = models.CharField(max_length=40 , null=True)
    email = models.CharField(unique=True, max_length=50, null=True)
    phone = models.CharField(max_length=10, null=True)
    date_created=models.DateField(auto_now_add=True, null=True)


    def __str__(self):
        return self.name

class Product(models.Model):
    CATEGORY = (('tshirt','tshirt'),('bottle','bottle'),('magic_mug','magic_mug'),('keychain','keychain'),('dictionary_item','dictionary_item'))
    id = models.IntegerField(primary_key= True)
    name = models.CharField(max_length=40 , null=True)
    category = models.CharField( max_length=50, null=True, choices=CATEGORY)
    color= models.CharField( max_length=50, null=True)
    description = models.CharField( max_length=250, null=True,blank=True)
    price= models.FloatField(null=True)
    image_url =models.CharField(max_length=600)
    date_created=models.DateField(auto_now_add=True, null=True)
    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS =(('Pending','Pending'),('out_for_delivery','out_for_delivery'),('Delivered','Delivered'))
    SIZE= (('s','s'),('m','m'),('l','l'),('xl','xl'))
    customer= models.ForeignKey(Customer,null=True,on_delete = models.SET_NULL)
    product= models.ForeignKey(Product,null=True,on_delete = models.SET_NULL)
    size = models.CharField( max_length=3, null=True, choices=SIZE)
    status = models.CharField(max_length=200,null=True,choices= STATUS)
    date_created=models.DateField(auto_now_add=True, null=True)