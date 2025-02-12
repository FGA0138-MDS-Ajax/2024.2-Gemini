from django.test import TestCase
from django.contrib.auth import get_user_model

Usuario = get_user_model()

class UsuarioModelTest(TestCase):
    def test_criar_usuario(self):
        """Testa a criação de um usuário comum."""
        usuario = Usuario.objects.create_user(email="teste@email.com", nome="Teste", password="12345678")
        self.assertEqual(usuario.email, "teste@email.com")
        self.assertTrue(usuario.check_password("12345678"))
        self.assertTrue(usuario.is_active)
        self.assertFalse(usuario.is_staff)

    def test_criar_superusuario(self):
        """Testa a criação de um superusuário."""
        admin = Usuario.objects.create_superuser(email="admin@email.com", nome="Admin", password="admin123")
        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_superuser)