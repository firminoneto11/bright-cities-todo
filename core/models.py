# Importing the models module from django.db
from django.db import models


class Task(models.Model):
    """
    This Task class represents a task that the user will create. It has the 'task_name' attribute and a 'description'
    attribute.
    """
    name = models.CharField(verbose_name='Name', max_length=25)
    description = models.CharField(verbose_name='Description', max_length=255, blank=True)
    completed = models.BooleanField(verbose_name='Completed', default=False)

    class Meta:
        ordering = '-id',
