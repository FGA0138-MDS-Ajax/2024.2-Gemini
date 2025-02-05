from django.contrib import admin
from .models import Carrinho, ItemCarrinho, Pedido, Entrega

class ItemCarrinhoInline(admin.TabularInline):  
    model = ItemCarrinho
    extra = 1

@admin.register(Carrinho)
class CarrinhoAdmin(admin.ModelAdmin):
    list_display = ("id_carrinho", "usuario", "status", "data_criacao", "total_carrinho")  
    list_filter = ("status",)
    search_fields = ("usuario__email",)
    inlines = [ItemCarrinhoInline]
    readonly_fields = ("data_criacao", "total_carrinho")  

    fieldsets = (
        ('Informações do Carrinho', {
            'fields': ('usuario', 'status'),
        }),
        ('Datas', {
            'fields': ('data_criacao',),
        }),
        ('Valores', {
            'fields': ('total_carrinho',),  
        }),
    )

    def total_carrinho(self, obj):
        """ Exibe o total formatado no Django Admin """
        return f"R$ {obj.total_carrinho:.2f}"
    total_carrinho.short_description = "Total do Carrinho"

@admin.register(ItemCarrinho)
class ItemCarrinhoAdmin(admin.ModelAdmin):
    list_display = ("id_item_carrinho", "carrinho", "produto", "quantidade", "subtotal")
    search_fields = ("produto__nome",)

    fieldsets = (
        ('Detalhes do Item', {
            'fields': ('carrinho', 'produto', 'quantidade'),
        }),
    )

    def subtotal(self, obj):
        return f"R$ {obj.subtotal:.2f}"
    subtotal.short_description = "Subtotal"

@admin.register(Entrega)
class EntregaAdmin(admin.ModelAdmin):
    list_display = ("id_entrega", "nome_entrega", "total_pedidos")  
    search_fields = ("nome_entrega",)
    readonly_fields = ("id_entrega",)  
    fieldsets = (
        ('Informações da Entrega', {
            'fields': ('nome_entrega',),
        }),
    )

    def total_pedidos(self, obj):
        """ Conta quantos pedidos estão associados a esta entrega """
        return obj.pedidos.count()
    total_pedidos.short_description = "Pedidos nesta Entrega"

@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ("id_pedido", "usuario", "carrinho_id", "totalPedido", "status", "entrega", "data_criacao")  
    list_filter = ("status", "entrega", "data_criacao")
    search_fields = ("usuario__email",)
    readonly_fields = ("totalPedido", "data_criacao", "carrinho") 

    fieldsets = (
        ('Informações do Pedido', {
            'fields': ('usuario', 'status', 'entrega'),
        }),
        ('Associação ao Carrinho', { 
            'fields': ('carrinho',),
        }),
        ('Detalhes Financeiros', {
            'fields': ('totalPedido',),
        }),
        ('Datas', {
            'fields': ('data_criacao',),
        }),
    )

    def carrinho_id(self, obj):
        """ Exibe o ID do Carrinho no Django Admin """
        return obj.carrinho.id_carrinho
    carrinho_id.short_description = "ID do Carrinho"
    def totalPedido(self, obj):
        return f"R$ {obj.totalPedido:.2f}"
    totalPedido.short_description = "Total do Pedido"
