from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Carrinho, ItemCarrinho, Pedido, Entrega
from .serializers import CarrinhoSerializer, ItemCarrinhoSerializer, PedidoSerializer, EntregaSerializer
from users.models import Usuario as User
from products.models import Produto
import json
from rest_framework.decorators import action


class CarrinhoViewSet(viewsets.ModelViewSet):
    queryset = Carrinho.objects.all()
    serializer_class = CarrinhoSerializer

    @action(detail=False, methods=['POST'], url_path='adicionar-item')
    def adicionar_item(request):
        usuario = get_object_or_404(User, email=request.data.get("email"))
        produto = get_object_or_404(Produto, id=request.data.get("produto_id"))
        quantidade = int(request.data.get("quantidade", 1))
            
        carrinho, _ = Carrinho.objects.get_or_create(usuario=usuario, status="ativo")

        item, created = ItemCarrinho.objects.get_or_create(carrinho=carrinho, produto=produto)
        item.quantidade += quantidade if not created else quantidade
        item.save()

        return Response({"message": "Produdo adicionado ao carrinho", "total": carrinho.total_carrinho}, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['POST'], url_path='finalizar-pedido')
    def finalizar_pedido(request):
        usuario = get_object_or_404(User, email=request.data.get("email"))
        carrinho = Carrinho.objects.filter(usuario=usuario, status="ativo").first()

        if not carrinho or not carrinho.itens.exists():
            return Response({"error": "Carrinho está vazio!"}, status=status.HTTP_400_BAD_REQUEST)
        
        entrega = get_object_or_404(Entrega, id_entrega=request.data.get("id_entrega"))

        pedido = Pedido.objects.create(
            usuario=usuario,
            carrinho = carrinho,
            entrega=entrega,
            totalPedido=carrinho.total_carrinho
        )

        carrinho.status = "finalizado"
        carrinho.save()

        novo_carrinho = Carrinho.objects.create(usuario=usuario, status="ativo")

        return Response({
            "mensagem": "Pedido finalizado!",
            "pedido_id": pedido.id_pedido,
            "total": pedido.totalPedido,
            "entrega": pedido.entrega.nome_entrega,
            "novo_carrinho_id": novo_carrinho.id_carrinho
        }, status=status.HTTP_201_CREATED)


class ItemCarrinhoViewSet(viewsets.ModelViewSet):
    queryset = ItemCarrinho.objects.all()
    serializer_class = ItemCarrinhoSerializer

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

class EntregaViewSet(viewsets.ModelViewSet):
    queryset = Entrega.objects.all()
    serializer_class = EntregaSerializer


