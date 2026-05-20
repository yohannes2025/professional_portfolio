from django.db import models
from cloudinary.models import CloudinaryField
from ckeditor.fields import RichTextField

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    content = RichTextField(blank=True)
    image = CloudinaryField('image', folder='projects/')
    github_link = models.URLField()
    live_demo = models.URLField(blank=True)
    technologies = models.JSONField(default=list)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# Add Skill, Testimonial, Experience, Education, ContactMessage similarly...