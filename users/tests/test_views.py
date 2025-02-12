from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth import get_user_model
from django.urls import reverse

Usuario = get_user_model()

class UsuarioViewsTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.usuario = Usuario.objects.create_user(email="user@email.com", nome="User", password="user123456")

    def test_registrar_usuario(self):
        """Testa o registro de um novo usuário."""
        url = reverse("register")
        data = {"email": "novo@email.com", "nome": "Novo", "password": "12345678"}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_login_usuario(self):
        """Testa login de um usuário e geração de token JWT."""
        url = reverse("login")
        data = {"email": "user@email.com", "password": "user123456"}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access_token", response.data)

    def test_detalhes_usuario(self):
        """Testa a visualização dos detalhes do usuário autenticado."""
        self.client.force_authenticate(user=self.usuario)
        url = reverse("user_detail")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["email"], self.usuario.email)