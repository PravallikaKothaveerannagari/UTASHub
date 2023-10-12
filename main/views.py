from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .models import Course,File,Specialization
from .serializers import FileSerializer,SpecializationSerializer,CourseSerializer
from rest_framework import status
from django.http import FileResponse
from mimetypes import guess_type
from .auto_task import craeteData



class MajorSpecializationView(APIView):
    def get(self,request):
        specializations = Specialization.objects.filter(parent=None)
        serializer = SpecializationSerializer(specializations,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
class SubSpecializationView(APIView):
    def get(self,request,special_id,*args, **kwargs):
        specializations = Specialization.objects.filter(parent__id=special_id)
        serializer = SpecializationSerializer(specializations,many=True)       
        if len(specializations):
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)
        
class LevelCourses(APIView):
    def get(self,request,special_id,level):
        stu_level = int(level)
        levels = ['first_year',"second_year","advanced","bachelor","all"]
        level = levels[stu_level-1]
        courses = []
        if level == 'all':
            courses = Course.objects.filter(specialization__id=special_id,file__isnull=False).distinct()
        else:
            courses = Course.objects.filter(level=level,specialization__id=special_id,file__isnull=False).distinct()

        if len(courses):
            serializer = CourseSerializer(courses,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class CoursesView(APIView):
    def get(self,request):
        # courses = Course.objects.all()
        courses = Course.objects.filter(file__isnull=False).distinct()
        serializer = CourseSerializer(courses,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)


def get_files_data(files):
    file_data = []
    for file in files:
        file_info = {
            'id': file.id,
            'name': file.name,
            'link':file.link,
            'description': file.description,
            'type': file.type,
            'size': file.size,
            'upload_data': file.upload_data,
            'last_update': file.last_update,
            'course': file.course.name,
            'created_by': file.created_by.username,
        }

        # Determine the content type based on the file type
        content_type, encoding = guess_type(file.path.name)
        if content_type:
            file_info['content_type'] = content_type

        file_data.append(file_info)

    return Response(file_data, status=status.HTTP_200_OK)
# class SpecializationFilesView(APIView):
#     def get(self, request, *args, **kwargs):
#         special_name = self.kwargs.get('special')
#         specialization = get_object_or_404(Specialization, name=special_name)
#         files = File.objects.filter(course__specialization=specialization)
#         return get_files_data(files)

class CourseFilesView(APIView):
    def get(self, request, course_id, *args, **kwargs):
        course = get_object_or_404(Course,cid=course_id)
        files = File.objects.filter(course=course)
        return get_files_data(files)

        

# def get_file_response(file):
#     content_type, _ = guess_type(file.path.name)
#     if content_type:
#         response = FileResponse(file.path, content_type=content_type)
#         response['Content-Disposition'] = f'attachment; filename="{file.name}"'
#         return response
#     return Response({'detail': 'Unsupported file type.'}, status=status.HTTP_400_BAD_REQUEST)
    
# class DownloadFileView(APIView):
#     def get(self, request, file_id, *args, **kwargs):
#         file = get_object_or_404(File, id=file_id)
#         return get_file_response(file)
    






class AutoInput(APIView):
    def post(self,request):
        go = request.data.get("go")
        if go != 1:
            return Response({"no action"},status=400)
        craeteData()
       

        return Response({"done"},status=202)
