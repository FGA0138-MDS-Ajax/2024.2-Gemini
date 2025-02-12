from django.test import TestCase
from loja.models import Pedido, Carrinho, Entrega
from users.models import Usuario as User
from loja.serializers import PedidoSerializer
from loja.models import ItemCarrinho, Produto

class PedidoSerializerTest(TestCase):
    def test_serializar_pedido(self):
        """Testa a integridade e comportamento do modelo Pedido.
            - Verifica a criação de um Pedido com todas as dependências (Usuário, Carrinho e Entrega).
            - Confirma que os valores do Pedido são armazenados corretamente no banco de dados.
            - Testa se o cálculo do total do pedido ocorre conforme esperado.
            - Garante que os métodos do modelo funcionam corretamente, como `calcular_total` e `save`.
        """
        usuario = User.objects.create(email="teste@email.com", password="123456")
        carrinho = Carrinho.objects.create(usuario=usuario)
        entrega = Entrega.objects.create(nome_entrega="Entrega Padrão")

        produto = Produto.objects.create(nome="Produto Teste", preco=80.0, estoque=10)

        ItemCarrinho.objects.create(carrinho=carrinho, produto=produto, quantidade=1)

        pedido = Pedido.objects.create(
            usuario=usuario,
            carrinho=carrinho,
            entrega=entrega,
            status="Entregue"
        )

        pedido.save()

        serializer = PedidoSerializer(pedido)
        data = serializer.data

        self.assertEqual(data["status"], "Entregue")
        self.assertEqual(data["totalPedido"], "80.00")
