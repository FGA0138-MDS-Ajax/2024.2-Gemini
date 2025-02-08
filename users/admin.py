from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.timezone import now
from .models import Usuario

@admin.register(Usuario)
class CustomUserAdmin(UserAdmin):
    model = Usuario
    list_display = ('email', 'nome', 'is_staff', 'is_active', 'reset_token', 'reset_token_expira', 'token_valido')
    ordering = ('email',)
    readonly_fields = ('last_login', 'reset_token', 'reset_token_expira')  

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Informações Pessoais', {'fields': ('nome',)}),
        ('Permissões', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        ('Recuperação de Senha', {'fields': ('reset_token', 'reset_token_expira')}),
        ('Datas Importantes', {'fields': ('last_login',)}),
    )

    search_fields = ('email', 'nome')

    def token_valido(self, obj):
        """Verifica se o token de recuperação ainda está válido."""
        if not obj.reset_token or not obj.reset_token_expira:
            return "—"  # Usuário nunca solicitou redefinição de senha

        if obj.reset_token_expira > now():
            return "✅ Válido"
    
        return "❌ Expirado"

    
    token_valido.short_description = "Status do Token"
    token_valido.admin_order_field = 'reset_token_expira'

    # 🔹 **Corrige erro no formulário de adição de usuário**
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'nome', 'password1', 'password2', 'is_staff', 'is_active'),
        }),
    )

