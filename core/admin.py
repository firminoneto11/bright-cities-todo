from django.contrib import admin
from core.models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    """
    This TaskAdmin model class will help the object's visualization by the administration in the django admin area.
    """
    list_display = 'name', 'description', 'completed'
