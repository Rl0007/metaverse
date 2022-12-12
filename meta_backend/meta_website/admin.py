from django.contrib import admin

# Register your models here.
from .models import Customer
from .models import Product
from .models import Order
from .models import UserAccount

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(UserAccount)