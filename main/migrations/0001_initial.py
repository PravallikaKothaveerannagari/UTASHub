# Generated by Django 4.2.3 on 2023-09-25 16:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('cid', models.CharField(max_length=255)),
                ('level', models.CharField(choices=[('foundation', 'Foundation'), ('first_year', 'First Year'), ('second_year', 'Second Year'), ('advances', 'Advances'), ('bachelor', 'Bachelor')], max_length=255)),
                ('link', models.CharField(blank=True, max_length=255, null=True)),
                ('version', models.FloatField(blank=True, null=True)),
                ('difficulty', models.SmallIntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Specialization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='main.specialization')),
            ],
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('path', models.FileField(blank=True, null=True, upload_to='')),
                ('link', models.CharField(max_length=255)),
                ('type', models.CharField(choices=[('doc', 'Document'), ('video', 'Video'), ('audio', 'Audio'), ('archives', 'Archives'), ('image', 'Image'), ('other', 'Other')], max_length=255)),
                ('size', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('upload_data', models.DateField(auto_now_add=True)),
                ('last_update', models.DateField(auto_now=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.course')),
                ('created_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='specialization',
            field=models.ManyToManyField(to='main.specialization'),
        ),
    ]