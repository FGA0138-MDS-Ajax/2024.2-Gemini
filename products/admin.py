from django.contrib import admin
from .models import Categoria, Produto

# Configuração de exibição para Categoria
@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'descricao', 'criado_em', 'atualizado_em')  # Exibe os campos na listagem
    list_display_links = ('nome',)                                           # Permite clicar no nome para editar
    search_fields = ('nome',)                                                # Permite buscar categorias pelo nome
    ordering = ('nome',)                                                     # Ordena as categorias pelo nome
    readonly_fields = ('criado_em', 'atualizado_em')                         # Deixa os campos de data como somente leitura
    fields = ('nome', 'descricao')                                           # Inclui campos editáveis no formulário
    


# Configuração de exibição para Produto
@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'categoria', 'preco', 'estoque', 'criado_em', 'atualizado_em')  # Exibe os campos na listagem
    list_display_links = ('nome',)                                                              # Permite clicar no nome para editar
    list_filter = ('categoria', 'criado_em')                                                   # Adiciona filtro por categoria e data de criação
    search_fields = ('nome', 'descricao')                                                     # Busca por nome ou descrição do produto
    ordering = ('nome',)                                                                      # Ordena os produtos pelo nome
    readonly_fields = ('criado_em', 'atualizado_em')                                          # Deixa os campos de data como somente leitura
    list_editable = ('preco', 'estoque')                                                      # Permite editar diretamente preço e estoque
    actions = ['delete_selected']                                                             # Adiciona ação customizada de exclusão
    fieldsets = (                                                                             # Organiza os campos em seções
        ('Informações do Produto', {
            'fields': ('nome', 'descricao', 'categoria', 'imagem'),
        }),
        ('Detalhes de Preço e Estoque', {
            'fields': ('preco', 'estoque'),
        }),
        ('Datas de Registro', {
            'fields': ('criado_em', 'atualizado_em'),
        }),
    )

