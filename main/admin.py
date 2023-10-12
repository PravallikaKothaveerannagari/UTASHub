from django.contrib import admin
from django.http.request import HttpRequest
from .models import Course,Specialization,File
from django import forms
from django.core.files.storage import default_storage
# Register your models here.



class CourseAdminForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = ('cid','name','level','version','specialization')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("cid",'name',"level","version","display_specializations")
    form = CourseAdminForm
    def display_specializations(self, obj):
        return ", ".join([spec.name for spec in obj.specialization.all()])

    display_specializations.short_description = 'Specializations'

    list_filter = ["specialization"]
    search_fields = ['cid', 'name']
@admin.register(Specialization)
class SpecializationAdmin(admin.ModelAdmin):
    list_display = ("name","sp_code",'parent','id')
    list_filter = ["parent"]
    search_fields = ['name']




class FileAdminForm(forms.ModelForm):
    class Meta:
        model = File
        fields = ('name',"description","link","type","course")
@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    list_display = ('name','id',"description",'link',"type","course","created_by","upload_data","last_update")

    search_fields = ['name','course__name']
    form = FileAdminForm
    def save_model(self, request, obj, form, change):
        # Set the created_by field to the currently logged-in user
        if not obj.created_by:
            obj.created_by = request.user

        obj.save()
    
    # def delete_queryset(self, request, queryset):
    #     # Perform custom actions before deleting multiple objects
    #     for file in queryset:
    #         # Delete the associated file for each object
    #         if file.path:
    #             file_path = file.path.name
    #             default_storage.delete(file_path)

    #     # Continue with the default queryset deletion
    #     super(FileAdmin, self).delete_queryset(request, queryset)
