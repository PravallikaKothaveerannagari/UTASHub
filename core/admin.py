from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active')
    
    # fieldsets = (
    #     (None, {'fields': ('username', 'password')}),
    #     ('Personal Info', {'fields': ('user_department', 'team', 'institution')}),
    #     ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
    #     ('Important Dates', {'fields': ('last_login', 'date_joined')}),
    # )
    # fieldsets = BaseUserAdmin.fieldsets + (
    #     ('Personal Info', {'fields': ( 'team', 'unit')}),
    # )
    # filter_horizontal = ('groups', 'user_permissions')  # Add this line to make it easier to manage groups and user permissions