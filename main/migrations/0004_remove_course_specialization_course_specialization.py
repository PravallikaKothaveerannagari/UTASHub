# Generated by Django 4.2.3 on 2023-09-26 06:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_course_credit'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='specialization',
        ),
        migrations.AddField(
            model_name='course',
            name='specialization',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.specialization'),
        ),
    ]
