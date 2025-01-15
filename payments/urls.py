from django.urls import path
from .views import GerarPagamentoView

urlpatterns = [
    path('gerar/', GerarPagamentoView.as_view(), name='gerar_pagamento'),
]