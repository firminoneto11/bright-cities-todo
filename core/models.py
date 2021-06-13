# Importing the models module from django.db
from django.db import models


class Task(models.Model):
    """
    This Task class represents a task that the user will create. It has the 'task_name' attribute and a 'description'
    attribute.
    """
    name = models.CharField(verbose_name='Name', max_length=50)
    description = models.CharField(verbose_name='Description', max_length=255, default='')
    completed = models.BooleanField(verbose_name='Completed', default=False)


"""
to do:
    Implement the logic in the database/form to accept a blank/null value in the description field
"""
