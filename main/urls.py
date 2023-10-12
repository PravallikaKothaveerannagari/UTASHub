from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('course-list/<int:special_id>/<int:level>',views.LevelCourses.as_view()),
    path('course-list/',views.CoursesView.as_view()),
    path('major-special/',views.MajorSpecializationView.as_view()),
    path('sub-special/<int:special_id>',views.SubSpecializationView.as_view()),
    path('course-files/<str:course_id>',views.CourseFilesView.as_view()),

    # path('special-files/<str:special>',views.SpecializationFilesView.as_view()),
    # path('download-file/<int:file_id>',views.DownloadFileView.as_view()),
    # path('special-list/',views.SpecializationView.as_view()),
    # path('course-list/',views.CoursesView.as_view()),
    path('auto-input/',views.AutoInput.as_view()),
]
