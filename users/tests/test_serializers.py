from django.test import TestCase
from ..serializers import UsuarioSerializer
from django.contrib.auth import get_user_model

Usuario = get_user_model()

class UsuarioSerializerTest(TestCase):
    def test_serializar_usuario(self):
        """Testa a serialização do usuário."""
        usuario = Usuario.objects.create_user(email="teste@email.com", nome="Teste", password="12345678")
        serializer = UsuarioSerializer(usuario)
        self.assertEqual(serializer.data["email"], "teste@email.com")
        self.assertEqual(serializer.data["nome"], "Teste")