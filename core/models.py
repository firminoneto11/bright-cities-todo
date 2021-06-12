from django.db import models


class Task(models.Model):
    task_name = models.CharField(max_length=240, verbose_name='task_name')
    description = models.CharField(max_length=240, verbose_name='description')
