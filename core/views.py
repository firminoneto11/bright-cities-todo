# Importing the render and redirect functions from the django.shortcuts module
from django.shortcuts import render, redirect
# Importing the TaskForm class from the core.forms module
from core.forms import TaskForm
# Importing the Task model from the core.models module
from core.models import Task


def index(request):
    """
    This is the main view for the index.html file. Every time the 'home' url is requested, the main page will be shown
    with this view. The items that are stored in the database will be passed as a context within a django template.
    """
    context = {
        'data': Task.objects.all()
    }
    return render(request, 'index.html', context)


def task(request, pk):
    # Initial data
    current_instance = Task.objects.get(pk=pk)
    context = {'task': current_instance}
    post_data = request.POST
    # Storing the custom method name created in the html file and the status of the task
    method_name = None
    task_status = None
    for key in post_data.keys():
        if key == 'method_name':
            method_name = post_data.get(key)
        elif key == 'completed':
            task_status = post_data.get(key)
    # Logic for 'get' requests
    if str(request.method) == 'GET':
        return render(request, 'task.html', context)
    # Logic for 'post' requests
    else:
        # Now we build the logic based on the 'method_name' variable. It's gonna be either put or delete
        # Put
        if method_name == 'PUT':
            form = TaskForm(post_data, instance=current_instance)
            if form.is_valid():
                if task_status == 'true':
                    current_instance.completed = True
                else:
                    current_instance.completed = False
                form.save(commit=True)
                return redirect(index)
            else:
                request.method = 'GET'
                return render(request, 'task.html', context)
        # Delete
        elif method_name == 'DELETE':
            current_instance.delete()
            return redirect(index)
        # A preventive measure if someone tries to change the value of the hidden input area
        else:
            request.method = 'GET'
            return render(request, 'task.html', context)


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
