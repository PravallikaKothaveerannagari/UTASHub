from rest_framework import serializers
from .models import File,Specialization,Course


class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = "__all__"
# class SubSpecializationSerializer(serializers.ModelSerializer):
#     custom = serializers.BooleanField(default=True)
#     class Meta:
#         model = Specialization
#         fields = ['id','name','parent','custom']

class CourseSerializer(serializers.ModelSerializer):
    # specialization_names = serializers.StringRelatedField(many=True, source='specialization')
    class Meta:
        model = Course
        fields = ['id','name','cid','specialization','level','version']

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'