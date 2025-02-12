from django.contrib import admin
from .models import Categoria, Produto, Banner
from django.utils.html import format_html


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
    list_display = ('id', 'nome', 'categoria', 'preco', 'estoque', 'criado_em', 'atualizado_em', 'imagem_preview')  
    list_display_links = ('nome',)  
    list_filter = ('categoria', 'criado_em')  
    search_fields = ('nome', 'descricao')  
    ordering = ('nome',)  
    readonly_fields = ('criado_em', 'atualizado_em', 'imagem_preview')  
    list_editable = ('preco', 'estoque')  
    actions = ['delete_selected']  

    fieldsets = (
        ('Informações do Produto', {
            'fields': ('nome', 'descricao', 'categoria'),
        }),
        ('Imagem', {
            'fields': ('imagem', 'imagem_preview'),
        }),
        ('Detalhes de Preço e Estoque', {
            'fields': ('preco', 'estoque'),
        }),
        ('Datas de Registro', {
            'fields': ('criado_em', 'atualizado_em'),
        }),
    )

    def imagem_preview(self, obj):
        """Exibir uma miniatura da imagem do produto no Django Admin"""
        if obj.imagem:
            return format_html('<img src="{}" width="100" style="border-radius: 5px;"/>', obj.imagem.url)
        return "Sem imagem"
    
    imagem_preview.short_description = "Pré-visualização"
    

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ("id_banner", "nome_banner", "descricao", "foto_preview")
    search_fields = ("nome_banner",)
    readonly_fields = ("foto_preview",)  # Deixa a pré-visualização apenas para leitura

    fieldsets = (
        ("Informações do Banner", {
            "fields": ("nome_banner", "descricao"),
        }),
        ("Imagem", {
            "fields": ("foto", "foto_preview"),
        }),
    )

    def foto_preview(self, obj):
        """Exibir uma miniatura da imagem no Django Admin"""
        if obj.foto:
            return format_html('<img src="{}" width="200" style="border-radius: 5px;"/>', obj.foto.url)
        return "Sem imagem"
    
    foto_preview.short_description = "Pré-visualização"
