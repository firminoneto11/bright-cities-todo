"""bright_cities URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# Importing the admin function from django.contrib
from django.contrib import admin
# Importing the path and include functions from the django.urls module
from django.urls import path, include
# Importing python decouple to hide the admin url
from decouple import config

# Django expects this 'urlpatterns' list to know what look for when a specific route is called via request
urlpatterns = [
    # django admin route/url
    path(config('ADMIN'), admin.site.urls),
    # Including any url/route that is defined in the include function with the core.urls module
    path('', include('core.urls'))
]
