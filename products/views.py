from rest_framework import viewsets, filters, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .models import Produto, Categoria, Banner
from .serializers import ProductsSerializer
from .serializers import CategoriaSerializer
from .serializers import BannerSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all().order_by('-criado_em')
    serializer_class = ProductsSerializer  
    permission_classes = [IsAuthenticatedOrReadOnly]

    def destroy(self, request, *args, **kwargs):
        produto = self.get_object()
        if produto.itempedido_set.exists():
            return Response({"erro": "Não é possível excluir um produto que já está em pedidos."}, status=status.HTTP_400_BAD_REQUEST)
        return super().destroy(request, *args, **kwargs)  
    
class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all().order_by('nome')
    serializer_class = CategoriaSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class BannerViewSet(viewsets.ModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer