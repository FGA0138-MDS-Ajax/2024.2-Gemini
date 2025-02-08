from rest_framework import serializers
from .models import Usuario
from django.contrib.auth.password_validation import validate_password

class UsuarioSerializer(serializers.ModelSerializer):
    """
    Serializer para criar e validar usuários comuns.
    """

    class Meta:
        model = Usuario
        fields = ['email', 'nome', 'password']
        extra_kwargs = {
            'password': {'write_only': True},  # Senha não aparece na resposta
        }

    def validate_email(self, value):
        """
        Garante que o email seja único
        """
        if Usuario.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email já está em uso.")
        return value

    def validate_password(self, value):
        """
        Valida a senha para ter pelo menos 8 caracteres
        """
        if len(value) < 8:
            raise serializers.ValidationError("A senha deve ter pelo menos 8 caracteres.")
        validate_password(value)  # Usa validação do Django
        return value

    def create(self, validated_data):
        """
        Cria um novo usuário garantindo que a senha seja hasheada
        """
        return Usuario.objects.create_user(
            email=validated_data["email"],
            nome=validated_data["nome"],
            password=validated_data["password"]
        )

class AdminUsuarioSerializer(serializers.ModelSerializer):
       class Meta:
        model = Usuario
        fields = ['email', 'nome', 'is_active', 'is_staff']
