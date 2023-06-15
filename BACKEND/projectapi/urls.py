from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('footballapi/', include('footballapi.urls')),
    path('', TemplateView.as_view(template_name='backend/index.html')),
]
