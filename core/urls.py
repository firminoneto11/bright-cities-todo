from django.urls import path
from core.views import index, create

urlpatterns = [
    path('', index, name='home'),
    path('create/', create, name='create')
]
