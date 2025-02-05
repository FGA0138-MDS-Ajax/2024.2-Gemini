from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarrinhoViewSet, ItemCarrinhoViewSet, PedidoViewSet, EntregaViewSet, adicionar_ao_carrinho, finalizar_pedido

# Criando o router e registrando os viewsets
router = DefaultRouter()
router.register(r'carrinhos', CarrinhoViewSet, basename='carrinho')
router.register(r'itens_carrinho', ItemCarrinhoViewSet, basename='item_carrinho')
router.register(r'pedidos', PedidoViewSet, basename='pedido')
router.register(r'entregas', EntregaViewSet, basename='entrega')

urlpatterns = [
    path('carrinho/adicionar/', adicionar_ao_carrinho, name='adicionar_ao_carrinho'),
    path('pedido/finalizar/', finalizar_pedido, name='finalizar_pedido'),
    path('', include(router.urls)),  # Inclui as rotas do router
]
