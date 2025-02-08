from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarrinhoViewSet, ItemCarrinhoViewSet, PedidoViewSet, EntregaViewSet

# Criando o router e registrando os viewsets
router = DefaultRouter()
router.register(r'carrinhos', CarrinhoViewSet, basename='carrinho')
router.register(r'itens_carrinho', ItemCarrinhoViewSet, basename='item_carrinho')
router.register(r'pedidos', PedidoViewSet, basename='pedido')
router.register(r'entregas', EntregaViewSet, basename='entrega')

urlpatterns = [
    path('', include(router.urls)),  # Inclui as rotas do router
]
