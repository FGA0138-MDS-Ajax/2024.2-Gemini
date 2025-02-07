import uuid
from .models import Usuario

def gerar_token(usuario):
    #Gera um token único para recuperação de senha e salva no banco.
    usuario.reset_token = uuid.uuid4()
    usuario.save()
    return usuario.reset_token

def validar_token(email, token):
    #Verifica se o token de recuperação é válido.

    usuario = Usuario.objects.filter(email=email, reset_token=token).first()
    return usuario if usuario else None
