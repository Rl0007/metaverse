from django.contrib import admin
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
# Register your models here.
from .models import Customer
from .models import Product
from .models import Order
from .models import UserAccount

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(UserAccount)


class OutstandingTokenAdmin1(OutstandingTokenAdmin):
    def has_delete_permission(self, *args, **kwargs):
        return True # or whatever logic you want
    
    def get_actions(self, request):
        actions = super(OutstandingTokenAdmin, self).get_actions(request)
        if 'delete_selected' in actions:
            del actions['delete_selected']
        return actions

admin.site.unregister(OutstandingToken)
admin.site.register(OutstandingToken, OutstandingTokenAdmin1)