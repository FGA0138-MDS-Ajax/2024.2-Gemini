import uuid
from datetime import datetime, timedelta
from .models import Usuario
from django.utils import timezone
TOKEN_EXPIRATION_TIME = timedelta(hours=1)  # 🔹 Token expira em 60 minutos

def gerar_token(usuario):
    """
    Gera um token único para recuperação de senha e salva no banco com tempo de expiração.
    """
    usuario.reset_token = uuid.uuid4()
    usuario.reset_token_expira = datetime.now() + TOKEN_EXPIRATION_TIME
    usuario.save()
    return usuario.reset_token

def validar_token(email, token):
    """Verifica se o token de recuperação de senha é válido e ainda não expirou."""
    usuario = Usuario.objects.filter(email=email, reset_token=token).first()

    if usuario and usuario.reset_token_expira and usuario.reset_token_expira > timezone.now():
        return usuario
    return None  # Retorna None se o token for inválido ou expirado
