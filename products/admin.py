from django.contrib import admin
from .models import Produto, Categoria

# Registrando os modelos
admin.site.register(Produto)
admin.site.register(Categoria)
