from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['email', 'nome', 'is_active', 'is_staff', 'password']
        extra_kwargs = {
            'password': {'write_only': True},  # Senha não deve aparecer na resposta
            'is_active': {'read_only': True},  # Apenas admins podem alterar
            'is_staff': {'read_only': True},
        }

    def create(self, validated_data):
        # Criando usuário e garantindo que a senha seja hasheada
        return Usuario.objects.create_user(**validated_data)


class AdminUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['email', 'nome', 'is_active', 'is_staff']
