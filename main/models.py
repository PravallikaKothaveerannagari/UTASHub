from collections.abc import Iterable
from django.db import models
from django.conf import settings
import os
from django.core.files.storage import default_storage
import re
# Create your models here.


class Specialization(models.Model):
    sp_code = models.CharField(max_length=4,unique=True,null=True,blank=True)
    name = models.CharField(max_length=255,unique=True)
    parent = models.ForeignKey('self',on_delete=models.CASCADE,blank=True,null=True)
    def __str__(self) -> str:
        return self.name
    
LEVEL_CHOICES = (('foundation','Foundation'),('first_year',"First Year"),("second_year","Second Year"),('advanced',"Advanced"),('bachelor',"Bachelor"))
class Course(models.Model):
    name = models.CharField(max_length=255)
    cid = models.CharField(max_length=255)
    level = models.CharField(max_length=255,choices=LEVEL_CHOICES)
    link = models.CharField(max_length=255,null=True,blank=True)
    version = models.FloatField(null=True,blank=True)
    specialization = models.ManyToManyField(Specialization)
    difficulty = models.SmallIntegerField(null=True,blank=True)
    credit = models.SmallIntegerField(default=3,null=True,blank=True)
    def __str__(self) -> str:
        return self.name


FILE_TYPES = (('doc','Document'),('video',"Video"),('audio',"Audio"),('archives',"Archives"),('image',"Image"),('other',"Other"))


class File(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    path = models.FileField(null=True,blank=True)
    link = models.CharField(max_length=255)
    type = models.CharField(max_length=255,choices=FILE_TYPES)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.SET_NULL,null=True)
    # size saved in MB
    size = models.DecimalField(max_digits=10, decimal_places=3, null=True, blank=True)
    upload_data = models.DateField(auto_now_add=True)
    last_update = models.DateField(auto_now=True)
    def __str__(self) -> str:
        return self.name


    def save(self, *args, **kwargs):
        # Extract the file ID from the Google Drive URL
        start_index = self.link.find("/d/") + 3
        end_index = self.link.find("/view")
        
        if start_index != -1 and end_index != -1 and len(self.link) >0:
            # file_id = url[start_index:end_index]
            self.link = self.link[start_index:end_index]
        else:
            self.link = "none"
            

        super(File, self).save(*args, **kwargs)

    # def delete(self, *args, **kwargs):
    #     # Delete the associated file when the model instance is deleted
    #     print(self.path.name)
    #     if self.path:
    #         # file_path = file.path.name
    #         # file = default_storage.open(self.path.name)
    #         # file.close()
    #         default_storage.delete(self.path.name)
        
    #     super(File, self).delete(*args, **kwargs)

    # def save(self, *args, **kwargs):
    #     # Get the course name
    #     course_name = self.course.cid
    #     # Generate the folder path based on course name and current date
    #     folder_path = os.path.join('courses', course_name)                                   
    #     # Combine folder path and file name to create the final file path
    #     file_path = os.path.join(folder_path, self.path.name)
    #     # Set the path of the FileField to the final file path
    #     self.path.name = file_path
    #     super(File, self).save(*args, **kwargs)

    #     if self.path:
    #         # Extract the original file name from the uploaded file
    #         original_file_name = os.path.basename(self.path.name)
    #         self.name = original_file_name  # Set the name field to the original file name
    #         file_size_bytes = default_storage.size(self.path.name)  # Calculate the size in bytes
    #         file_size_mb = file_size_bytes / 1048576  # Convert to megabytes (MB)
    #         self.size = file_size_mb
    #     super(File, self).save(*args, **kwargs)


    


