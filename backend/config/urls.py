# backend/config/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse # 👈 Added for a clean root landing page
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

# Simple welcome view so the root URL doesn't crash with a 404
def api_root_welcome(request):
    return JsonResponse({
        "message": "Portfolio Backend API is running",
        "documentation": "/api/docs/"
    })

urlpatterns = [
    # Root URL
    path('', api_root_welcome, name='api-root'), # 👈 Handles http://127.0.0.1:8000/
    
    path('admin/', admin.site.urls),
    
    # API Documentation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    
    # Apps
    path('api/', include('api.urls')),
    # path('api/blog/', include('blog.urls')), # ❌ Removed from here to prevent URL hijacking
]

# Static/Media files should ALWAYS be appended last
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)