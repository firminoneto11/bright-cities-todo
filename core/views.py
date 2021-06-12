from django.shortcuts import render, redirect
from core.forms import TaskForm


def index(request):
    return render(request, 'index.html')


def create(request):
    if str(request.method) == 'POST':
        print(request.POST)
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            request.method = 'GET'
            return redirect(index)
    return render(request, 'create.html')
