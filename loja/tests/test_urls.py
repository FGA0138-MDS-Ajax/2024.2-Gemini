from django.test import SimpleTestCase
from django.urls import resolve, reverse
from loja.views import CarrinhoViewSet, ItemCarrinhoViewSet, PedidoViewSet, EntregaViewSet

class APIRoutesTest(SimpleTestCase):
    def test_carrinho_urls(self):
        """Testa as URLs do endpoint de carrinhos."""
        self.assertEqual(resolve(reverse("carrinho-list")).func.cls, CarrinhoViewSet)
        self.assertEqual(resolve(reverse("carrinho-detail", args=[1])).func.cls, CarrinhoViewSet)

    def test_itens_carrinho_urls(self):
        """Testa as URLs do endpoint de itens do carrinho."""
        self.assertEqual(resolve(reverse("item_carrinho-list")).func.cls, ItemCarrinhoViewSet)
        self.assertEqual(resolve(reverse("item_carrinho-detail", args=[1])).func.cls, ItemCarrinhoViewSet)

    def test_pedido_urls(self):
        """Testa as URLs do endpoint de pedidos."""
        self.assertEqual(resolve(reverse("pedido-list")).func.cls, PedidoViewSet)
        self.assertEqual(resolve(reverse("pedido-detail", args=[1])).func.cls, PedidoViewSet)

    def test_entrega_urls(self):
        """Testa as URLs do endpoint de entregas."""
        self.assertEqual(resolve(reverse("entrega-list")).func.cls, EntregaViewSet)
        self.assertEqual(resolve(reverse("entrega-detail", args=[1])).func.cls, EntregaViewSet)
