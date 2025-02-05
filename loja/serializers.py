from rest_framework import serializers
from .models import Carrinho, ItemCarrinho, Pedido, Entrega

class ItemCarrinhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemCarrinho
        fields = "__all__"

class CarrinhoSerializer(serializers.ModelSerializer):
    itens = ItemCarrinhoSerializer(many=True, read_only=True)

    class Meta:
        model = Carrinho
        fields = "__all__"

class PedidoSerializer(serializers.ModelSerializer):
    carrinho = CarrinhoSerializer(read_only=True)
    entrega = serializers.StringRelatedField()

    class Meta:
        model = Pedido
        fields = "__all__"

class EntregaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entrega
        fields = "__all__"
