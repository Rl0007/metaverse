from django.contrib import admin
from django.urls import path,include
# from meta_website import views
from . views import MyTokenObtainPairView
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('',views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]

 

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('add_product',views.add_product, name='add_product' ),
#     path('update_product',views.update_product, name='update_product' ),
#     path('read_product',views.read_product, name='read_product' ),
#     path('delete_product',views.delete_product, name='delete_product' ),


# ]
