from unittest.mock import patch
from django.test import SimpleTestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework.response import Response
from rest_framework import status

class PedidoViewTest(SimpleTestCase):
    """Testa as operações da API relacionadas ao Pedido sem depender do banco de dados."""

    def setUp(self):
        """Configura os mocks e dados iniciais para os testes."""
        self.client = APIClient()

    @patch("loja.views.PedidoViewSet.list")
    def test_listar_pedidos(self, mock_pedido_list):
        """Testa a listagem de pedidos via API com mock retornando um Response válido."""

        mock_response = Response(
            data=[{"status": "Pago", "totalPedido": "100.0"}],
            status=status.HTTP_200_OK
        )
        mock_pedido_list.return_value = mock_response

        url = reverse("pedido-list")
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()[0]["status"], "Pago")
        self.assertEqual(response.json()[0]["totalPedido"], "100.0")
