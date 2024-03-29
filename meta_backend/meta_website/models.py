from codecs import charmap_build

# from enum import unique
from random import choices
from turtle import color
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin,BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self,email,name,password=None):
        if not email:
            raise ValueError("You must use a valid email address")

        email = self.normalize_email(email)
        user = self.model(email=email,name=name)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self,email,name,password):
        user = self.create_user(email,name,password)
        user.is_superuser=True
        user.is_staff=True
        user.save()
        return user

class UserAccount(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255 , unique= True)
    name = models.CharField(max_length=255)
    is_active= models.BooleanField(default= True)
    is_staff =models.BooleanField(default = False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS= ['name',]


    objects = UserAccountManager()

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email




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