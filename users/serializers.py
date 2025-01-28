from rest_framework import serializers
from .models import Usuario


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'email', 'nome', 'is_active', 'is_staff', 'password']
        extra_kwargs = {
            'password': {'write_only': True},  # Não exibe a senha na resposta
            'is_active': {'read_only': True},  # Apenas administradores podem alterar
            'is_staff': {'read_only': True},
        }

    def create(self, validated_data):
        # Criação de usuário com hash da senha
        user = Usuario.objects.create_user(
            email=validated_data['email'],
            nome=validated_data['nome'],
            password=validated_data['password']
        )
        return user


class AdminUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'email', 'nome', 'is_active', 'is_staff']
