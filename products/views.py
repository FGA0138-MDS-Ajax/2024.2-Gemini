from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .models import Produto, Categoria, Banner
from .serializers import ProductsSerializer
from .serializers import CategoriaSerializer
from .serializers import BannerSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gerenciar os produtos. 
    Apenas administradores têm acesso.
    """
    queryset = Produto.objects.all().order_by('-criado_em')  # Ordena pelo mais recente
    serializer_class = ProductsSerializer
    permission_classes = [IsAdminUser]  # Permite apenas usuários admin
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['nome', 'descricao']  # Permite buscar produtos por nome ou descrição
    ordering_fields = ['preco', 'criado_em']  # Permite ordenar por preço ou data de criação


class CategoriaViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gerenciar categorias. 
    Leitura disponível para todos; apenas usuários autenticados podem criar ou editar.
    """
    queryset = Categoria.objects.all().order_by('nome')
    serializer_class = CategoriaSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class BannerViewSet(viewsets.ModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer