from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken  # JWT Tokens
from .models import Usuario
from .serializers import UsuarioSerializer, AdminUsuarioSerializer
from django.contrib.auth.password_validation import validate_password
from django.utils import timezone
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.hashers import make_password  
from django.core.mail import send_mail
from django.conf import settings
from .services import gerar_token, validar_token
from rest_framework.decorators import api_view, permission_classes
import uuid
from django.core.exceptions import ValidationError




# Registro de usuário (Apenas para usuários não autenticados)
class RegisterView(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            return Response({"erro": "Usuário já autenticado!"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensagem": "Usuário registrado com sucesso!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login de usuário com JWT
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)

        if user:
            user.last_login = timezone.now()
            user.save(update_fields=['last_login'])
            refresh = RefreshToken.for_user(user)  # Gera o token JWT
            return Response({
                "message": "Login bem-sucedido",
                "access_token": str(refresh.access_token),
                "refresh_token": str(refresh)
            }, status=status.HTTP_200_OK)

        return Response({"erro": "Credenciais inválidas"}, status=status.HTTP_401_UNAUTHORIZED)

# Detalhes do usuário autenticado
class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UsuarioSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Gerenciamento de usuários (somente para admins)
class UserViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = AdminUsuarioSerializer  # Admin pode visualizar mais campos
    permission_classes = [IsAdminUser]


class ChangePasswordView(APIView):
    #Permite que um usuário autenticado altere sua senha

    permission_classes = [IsAuthenticated]

    def post(self, request):
        usuario = request.user
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")

        # Verifica se a senha antiga está correta
        if not usuario.check_password(old_password):
            return Response({"erro": "A senha antiga está incorreta."}, status=status.HTTP_400_BAD_REQUEST)

        # Valida a nova senha
        if len(new_password) < 8:
            return Response({"erro": "A senha deve ter pelo menos 8 caracteres."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            validate_password(new_password, user=usuario)
        except Exception as e:
            return Response({"erro": e.messages}, status=status.HTTP_400_BAD_REQUEST)

        # Atualiza a senha
        usuario.set_password(new_password)
        usuario.save()

        # Mantém o usuário logado após a mudança de senha
        update_session_auth_hash(request, usuario)

        return Response({"mensagem": "Senha alterada com sucesso!"}, status=status.HTTP_200_OK)
    
class ForgotPasswordView(APIView):
    """
    Gera um token de recuperação de senha e envia por e-mail.
    """
    def post(self, request):
        email = request.data.get("email")
        usuario = Usuario.objects.filter(email=email).first()

        if not usuario:
            return Response({"erro": "Usuário não encontrado."}, status=status.HTTP_404_NOT_FOUND)

        # Gera token de recuperação com expiração
        token = gerar_token(usuario)

        # Envia email com o token
        send_mail(
            "Recuperação de Senha",
            f"Seu token para redefinir a senha: {token}",
            settings.DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )

        return Response({"mensagem": "Token enviado para o email!"}, status=status.HTTP_200_OK)


class ResetPasswordView(APIView):
    """
    Permite redefinir a senha usando um token válido.
    """
    def post(self, request):
        email = request.data.get("email")
        token = request.data.get("token")
        new_password = request.data.get("new_password")

        # 🔹 Verifica se o token tem um formato válido de UUID antes de processar
        try:
            uuid.UUID(token)  # Se não for um UUID válido, lançará um erro
        except ValueError:
            return Response({"erro": "Código inválido."}, status=status.HTTP_400_BAD_REQUEST)

        usuario = validar_token(email, token)

        if not usuario:
            return Response({"erro": "Token inválido ou expirado."}, status=status.HTTP_400_BAD_REQUEST)

        # Verifica se `new_password` não é None
        if not new_password:
            return Response({"erro": "A nova senha não pode estar vazia."}, status=status.HTTP_400_BAD_REQUEST)

        # Valida a nova senha
        try:
            validate_password(new_password)
        except ValidationError as e:
            return Response({"erro": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # Atualiza a senha do usuário
        try:
            usuario.password = make_password(new_password)
            usuario.reset_token = None  # Remove o token usado
            usuario.reset_token_expira = None  # Reseta expiração
            usuario.save()

            return Response({"mensagem": "Senha redefinida com sucesso!"}, status=status.HTTP_200_OK)
        except Exception:
            return Response({"erro": "Erro ao salvar nova senha."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_view(request):
    try:
        refresh_token = request.data.get("refresh_token")  # Token de atualização
        if not refresh_token:
            return Response({"error": "Token de refresh é obrigatório."}, status=400)

        token = RefreshToken(refresh_token)
        token.blacklist()  # Adiciona o token à lista de bloqueio

        return Response({"message": "Logout realizado com sucesso."}, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=500)

