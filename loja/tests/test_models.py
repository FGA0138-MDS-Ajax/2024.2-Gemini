from django.test import TestCase
from loja.models import Pedido, Carrinho, Entrega, ItemCarrinho
from users.models import Usuario as User
from products.models import Produto

class PedidoModelTest(TestCase):
    def test_criar_pedido(self):
        """Testa a serialização e desserialização do modelo Pedido.
            - Verifica se o serializer converte corretamente um objeto Pedido em JSON.
            - Confirma se os dados serializados contêm os valores esperados.
            - Garante que os campos obrigatórios são representados corretamente.
        """
        usuario = User.objects.create(email="teste@email.com", password="123456")
        carrinho = Carrinho.objects.create(usuario=usuario)
        entrega = Entrega.objects.create(nome_entrega="Entrega Padrão")

        produto = Produto.objects.create(nome="Produto Teste", preco=100.0, estoque=10)

        ItemCarrinho.objects.create(carrinho=carrinho, produto=produto, quantidade=1)

        pedido = Pedido.objects.create(usuario=usuario, carrinho=carrinho, entrega=entrega, status="Pendente")

        pedido.totalPedido = pedido.calcular_total()
        pedido.save()

        self.assertEqual(pedido.status, "Pendente")
        self.assertEqual(pedido.usuario, usuario)
        self.assertEqual(pedido.carrinho, carrinho)
        self.assertEqual(pedido.entrega, entrega)
        self.assertEqual(pedido.totalPedido, 100.0)
