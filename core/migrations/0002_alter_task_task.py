# Generated by Django 3.2.4 on 2021-06-12 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='task',
            field=models.CharField(max_length=240, verbose_name='task'),
        ),
    ]