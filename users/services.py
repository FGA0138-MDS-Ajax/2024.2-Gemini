import uuid
from datetime import datetime, timedelta
from .models import Usuario
from django.utils.timezone import now
TOKEN_EXPIRATION_TIME = timedelta(hours=1)  # 🔹 Token expira em 60 minutos

def gerar_token(usuario):
    """
    Gera um token único para recuperação de senha e salva no banco com tempo de expiração.
    """
    usuario.reset_token = uuid.uuid4()
    usuario.reset_token_expira = now() + TOKEN_EXPIRATION_TIME
    usuario.save()
    return usuario.reset_token


def validar_token(email, token):
    usuario = Usuario.objects.filter(email=email, reset_token=token).first()
    
    if not usuario or usuario.reset_token_expira is None:
        return None  # Token não existe ou não tem expiração
    
    if usuario.reset_token_expira < now():  # Corrigindo a comparação com timezone
        return None  # Token expirado
    
    return usuario
