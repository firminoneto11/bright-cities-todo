# Importing the path function from the django.urls module
from django.urls import path
# Importing the views index and create from the core.views module
from core.views import index, create

# Django expects this 'urlpatterns' list to look for the urls from the web application. And each url will be a calling
# for the path() function, passing as arguments the url route, the view and a name for dynamic requests
urlpatterns = [
    path('', index, name='home'),
    path('create/', create, name='create')
]
