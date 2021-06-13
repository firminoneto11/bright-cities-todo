# Importing the render and redirect functions from the django.shortcuts module
from django.shortcuts import render, redirect
# Importing the TaskForm class from the core.forms module
from core.forms import TaskForm
# Importing the Task model from the core.models module
from core.models import Task


def index(request):
    """
    index.html
    """
    context = {
        'data': Task.objects.all()
    }
    return render(request, 'index.html', context)


def create(request):
    """
    This create function is the view for the create.html template. We check if the method sent through the request, is
    a POST method, and if it is we do a couple things to it.

    First, we create an object called 'form' using the class TaskForm with the data inputted by the user that is inside
    the request.POST attribute.

    Then we validate the form with the is_valid() method, which is provided by the ModelForm class, and if it is valid
    we save it into the database and redirect the user to the home page.

    Now if the request method isn't POST, we simply return the rendered page and also if the form isn't valid, we render
    the page again.
    """
    if str(request.method) == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return redirect(index)
        else:
            request.method = 'GET'
            return render(request, 'create.html')
    return render(request, 'create.html')
