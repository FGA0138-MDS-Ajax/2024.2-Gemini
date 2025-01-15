from django.db import models
from backends.users.models import Pedido    

class Pagamento(models.Model):
    METODOS_PAGAMEENTO = [
        ('pix', 'Pix'),
        ('boleto', 'Boleto'),
    ]
    
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    metodo = models.CharField(max_length=10, choices=METODOS_PAGAMENTO)
    status = models.CharField(max_length=20, default='pendente')  
    referencia_gateway = models.CharField(max_length=255, blank=True, null=True)  
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    vencimento_boleto = models.DateField(blank=True, null=True)  
    qr_code_pix = models.TextField(blank=True, null=True)  
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Pagamento {self.id} - Pedido {self.pedido.id}"
