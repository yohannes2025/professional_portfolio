from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogListView(generics.ListAPIView):
    queryset = BlogPost.objects.filter(published=True)
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]

class BlogDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.filter(published=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]