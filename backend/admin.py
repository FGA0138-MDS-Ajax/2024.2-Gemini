from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # URL do painel admin
    path('api/users/', include('users.urls')),  # URLs do app `users`
]
