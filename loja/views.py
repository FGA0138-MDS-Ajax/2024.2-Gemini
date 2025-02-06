from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework import viewsets
from .models import Carrinho, ItemCarrinho, Pedido, Entrega
from .serializers import CarrinhoSerializer, ItemCarrinhoSerializer, PedidoSerializer, EntregaSerializer
from users.models import Usuario as User
from products.models import Produto
from django.views.decorators.csrf import csrf_exempt
import json


class CarrinhoViewSet(viewsets.ModelViewSet):
    queryset = Carrinho.objects.all()
    serializer_class = CarrinhoSerializer

class ItemCarrinhoViewSet(viewsets.ModelViewSet):
    queryset = ItemCarrinho.objects.all()
    serializer_class = ItemCarrinhoSerializer

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

class EntregaViewSet(viewsets.ModelViewSet):
    queryset = Entrega.objects.all()
    serializer_class = EntregaSerializer


@csrf_exempt
def adicionar_ao_carrinho(request):
    if request.method == "POST":
        data = json.loads(request.body)
        usuario = get_object_or_404(User, email=data.get("email"))
        produto = get_object_or_404(Produto, id=data.get("produto_id"))
        quantidade = int(data.get("quantidade", 1))

        carrinho = Carrinho.get_carrinho_ativo(usuario)

        item, created = ItemCarrinho.objects.get_or_create(carrinho=carrinho, produto=produto)
        item.quantidade += quantidade if not created else quantidade
        item.save()

        return JsonResponse({"message": "Item adicionado ao carrinho", "total": carrinho.total_carrinho})

    return JsonResponse({"error": "Método não permitido"}, status=405)

@csrf_exempt
def finalizar_pedido(request):
    if request.method == "POST":
        data = json.loads(request.body)
        usuario = get_object_or_404(User, email=data.get("email"))
        carrinho = Carrinho.get_carrinho_ativo(usuario)

        if not carrinho.itens.exists():
            return JsonResponse({"error": "Carrinho está vazio!"}, status=400)

        id_entrega = data.get("id_entrega")
        entrega = get_object_or_404(Entrega, id_entrega=id_entrega)

        pedido = Pedido.objects.create(
            usuario=usuario,
            carrinho=carrinho,
            entrega=entrega,
            totalPedido=carrinho.total_carrinho
        )

        carrinho.status = "finalizado"
        carrinho.save()

        novo_carrinho = Carrinho.objects.create(usuario=usuario, status="ativo")

        return JsonResponse({
            "message": "Pedido finalizado",
            "pedido_id": pedido.id_pedido,
            "total": pedido.totalPedido,
            "entrega": pedido.entrega.nome_entrega,
            "novo_carrinho_id": novo_carrinho.id_carrinho
        })

    return JsonResponse({"error": "Método não permitido"}, status=405)
