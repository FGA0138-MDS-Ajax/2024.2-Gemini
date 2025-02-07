from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken  # JWT Tokens
from .models import Usuario
from .serializers import UsuarioSerializer, AdminUsuarioSerializer
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import update_session_auth_hash


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