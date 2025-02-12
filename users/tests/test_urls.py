from django.test import SimpleTestCase
from django.urls import resolve, reverse
from ..views import RegisterView, LoginView, UserDetailView, ChangePasswordView, ForgotPasswordView, ResetPasswordView, logout_view

class UsuarioURLsTest(SimpleTestCase):
    def test_urls_resolvem_para_views_corretas(self):
        self.assertEqual(resolve(reverse("register")).func.view_class, RegisterView)
        self.assertEqual(resolve(reverse("login")).func.view_class, LoginView)
        self.assertEqual(resolve(reverse("user_detail")).func.view_class, UserDetailView)
        self.assertEqual(resolve(reverse("change_password")).func.view_class, ChangePasswordView)
        self.assertEqual(resolve(reverse("forgot_password")).func.view_class, ForgotPasswordView)
        self.assertEqual(resolve(reverse("reset_password")).func.view_class, ResetPasswordView)
        self.assertEqual(resolve(reverse("logout")).func, logout_view)