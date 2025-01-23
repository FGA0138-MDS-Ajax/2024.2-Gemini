from rest_framework import serializers
from .models import Produto, Categoria

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer(read_only=True)  #Pra exibir os detalhes da categoria
    categoria_id = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all(), source='categoria', write_only=True)  #Para criar/atualizar

    class Meta:
        model = Produto
        fields = '__all__'