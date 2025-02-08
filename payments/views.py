from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pagamento
from django.conf import settings 

class GerarPagamentoView(APIView):
    def post(self, request, *args, **kwargs):
        pedido_id = request.data.get('pedido_id')
        metodo = request.data.get('metodo')
        valor = request.data.get('valor')
        pedido = Pedido.objects.get(id=pedido_id)
        pagamento = Pagamento.objects.create(
            pedido=pedido,
            metodo=metodo,
            valor=valor
        )
        
        if metodo not in ['pix', 'boleto']:
            return Response({'error': 'Método de pagamento inválido'}, status=400)
        
        
        ## APENAS DE BASE JA QUE NAO FOI DEFINIDO O GATEWAY PELO CLIENTE
        
        if metodo == 'pix':
            qr_code_pix = "https://example.com/qrcode123"  # Gerado pelo gateway
            pagamento = Pagamento.objects.create(
                pedido_id=pedido_id,
                metodo='pix',
                status='pendente',
                valor=valor,
                qr_code_pix=qr_code_pix,
            )
            return Response({
                'status': 'sucesso',
                'qr_code_pix': qr_code_pix,
                'id': pagamento.id,
            })
            
        elif metodo == 'boleto':
            vencimento = "2025-01-20"  # Data simulada
            link_boleto = "https://example.com/boleto123"  # Gerado pelo gateway
            pagamento = Pagamento.objects.create(
                pedido_id=pedido_id,
                metodo='boleto',
                status='pendente',
                valor=valor,
                vencimento_boleto=vencimento,
                referencia_gateway=link_boleto,
            )
            return Response({
                'status': 'sucesso',
                'link_boleto': link_boleto,
                'vencimento': vencimento,
                'id': pagamento.id,
            })

        return Response({'erro': 'Erro inesperado'}, status=500)

# Create your views here.
