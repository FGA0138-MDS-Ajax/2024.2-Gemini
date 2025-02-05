from django.db import models
from users.models import Usuario as User
from products.models import Produto

class Carrinho(models.Model):
    id_carrinho = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='carrinhos', to_field='email')
    data_criacao = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('ativo', 'Ativo'), ('finalizado', 'Finalizado')], default='ativo')

    def __str__(self):
        return f"Carrinho {self.id_carrinho} - {self.usuario.email}"

    @property
    def total_carrinho(self):
        return sum(item.subtotal for item in self.itens.all())

    @staticmethod
    def get_carrinho_ativo(usuario):
        """Retorna o carrinho ativo do usuário ou cria um novo caso não exista."""
        carrinho, created = Carrinho.objects.get_or_create(usuario=usuario, status="ativo")
        return carrinho


class ItemCarrinho(models.Model):
    id_item_carrinho = models.AutoField(primary_key=True)
    carrinho = models.ForeignKey(Carrinho, on_delete=models.CASCADE, related_name='itens')
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField()

    def __str__(self):
        return f"Item {self.id_item_carrinho} - {self.produto.nome}"

    @property
    def subtotal(self):
        return self.produto.preco * self.quantidade

class Entrega(models.Model):
    id_entrega = models.AutoField(primary_key=True)
    nome_entrega = models.CharField(max_length=100)

    def __str__(self):
        return f"Entrega {self.id_entrega} - {self.nome_entrega}"

class Pedido(models.Model):
    id_pedido = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pedidos', to_field='email')
    carrinho = models.OneToOneField(Carrinho, on_delete=models.CASCADE, related_name='pedido')
    entrega = models.ForeignKey('Entrega', on_delete=models.PROTECT, related_name='pedidos')
    data_criacao = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pendente', 'Pendente'), ('pago', 'Pago'), ('cancelado', 'Cancelado')], default='pendente')
    totalPedido = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Mantém o total no banco

    def __str__(self):
        return f"Pedido {self.id_pedido} - {self.usuario.email}"

    def calcular_total(self):
        """ Atualiza o total do pedido somando os valores do carrinho. """
        return self.carrinho.total_carrinho

    def save(self, *args, **kwargs):
        """ Sobrescreve o save() para garantir que o total do pedido sempre seja atualizado. """
        self.totalPedido = self.calcular_total()  # Garante que o totalPedido seja atualizado
        super().save(*args, **kwargs)








