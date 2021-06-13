# Importing the forms module from django
from django import forms
# Importing the Task class that was created in the models.py module
from core.models import Task


class TaskForm(forms.ModelForm):
    """
    This TaskForm class extends from the ModelForm class that is defined in the forms module, and is a representation of
    the formulary that exists in the frontend.
    """
    class Meta:
        """
        This Meta class will create an instance of the Task class based on what the user insert into the frontend.
        """
        model = Task
        fields = ['name', 'description']
