from django.urls import path
from .views import (
    RegisterView, LoginView, UserDetailView, ChangePasswordView,
    ForgotPasswordView, ResetPasswordView
)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('me/', UserDetailView.as_view(), name='user_detail'),
    path('change-password/', ChangePasswordView.as_view(), name='change_password'), #quando estiver logago
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot_password'),  #envio de token
    path('reset-password/', ResetPasswordView.as_view(), name='reset_password'),   #resetar senha
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
