# Plano de Teste

## 1. Introdução

O objetivo deste documento é descrever o plano de testes a ser executado para o projeto **FGR E-commerce**. Este plano define a abordagem, recursos e cronograma das atividades de teste necessárias para garantir que o projeto atenda aos requisitos especificados e funcione conforme o esperado. Ele serve como um guia para a equipe de teste. 



--- 


## 2. Objetivos do Teste

- Validar se o sistema atende aos requisitos funcionais e não funcionais.
- Garantir a confiabilidade, performance e segurança do sistema.
- Identificar e corrigir defeitos antes da entrega final.

## 3. Tipos de Testes

- **Testes funcionais**
  - **Testes Unitários:** Testes de pequenas unidades do código.
  - **Testes de Integração:** Verificação da interação entre diferentes módulos.
  - **Testes de Sistema:** Testes completos para validar a aplicação como um todo.
  - **Testes de Aceitação do Usuário:** Testes realizados pelos stakeholders finais para garantir que o sistema atende às expectativas.

-**Testes não funcionais**
  - **Teste de Performance**
  - **Teste de Usabilidade**
  - **Teste de segurança**

## 4. Escopo

### **4.1 O que será testado**
#### 🔹 **Funcionalidade principal do sistema**
- **Testes Unitários:**
  - Testar os métodos dos Models.
  - Testar as Views.
  - Testar a validação dos Forms.
  - Testar o mapeamento das URLs para as Views.
  - Testar funções utilitárias.

- **Testes de Integração:**
  - Testar a interação entre Models e Views.
  - Testar a persistência de dados no banco de dados.
  - Testar o processamento de formulários através das Views.
  - Testar os mecanismos de Autenticação e Autorização.
  - Testar o fluxo completo de uma requisição HTTP.

- **Testes de Sistema:**
  - Testar os fluxos de usuário ponta a ponta.
  - Testes de UI e Usabilidade.
  - Testar a resiliência do sistema a falhas.

- **Testes de Performance e Carga:**
  - Testar o tempo de resposta do sistema sob diferentes cargas de usuários.
  - Testar a capacidade do sistema de lidar com picos de tráfego.
  - Testar o consumo de recursos (CPU, memória) sob diferentes cargas.

- **Testes de Segurança:**
  - Testar a segurança da autenticação e autorização.
  - Testar vulnerabilidades comuns de segurança web.

### **4.2 O que não será testado**
- Testes de sistemas de terceiros não integrados diretamente.
- Testes de hardware ou ambiente de produção.

---

## 5. Estratégia de Teste

### **Organização dos Testes**
Os testes serão organizados em uma pasta `tests`, dividida em subpastas para cada app, conforme exemplificado abaixo:


# 📌 Testes do Módulo Loja

## **1. Teste de Modelos (`models`)

### 🔹 **Arquivo: `PedidoModelTest`**
- O **modelo `Pedido`** representa um pedido no sistema, contendo um usuário, um carrinho e uma entrega.
- O teste **`test_criar_pedido`** verifica:
  - Se um pedido pode ser criado corretamente.
  - Se o cálculo do **totalPedido** retorna o valor correto.
  - Se os atributos como `status`, `usuario`, `carrinho` e `entrega` são salvos corretamente.

📌 **Objetivo dos testes de modelo:**  
✅ Garantir que os modelos do Django funcionem corretamente.  
✅ Testar métodos específicos do modelo (`calcular_total()`, `save()` etc.).  

---

## **2. Teste de Serializers (`serializers`)

### 🔹 **Arquivo: `PedidoSerializerTest`**
- O **serializer `PedidoSerializer`** é usado para converter objetos `Pedido` em JSON e vice-versa.
- O teste **`test_serializar_pedido`** verifica:
  - Se a serialização de um `Pedido` para JSON funciona corretamente.
  - Se os dados serializados contêm os valores esperados, como `status` e `totalPedido`.

📌 **Objetivo dos testes de serializer:**  
✅ Garantir que os dados do modelo sejam corretamente transformados em JSON.  
✅ Assegurar que a conversão entre JSON e objeto Python mantenha a integridade dos dados.  

---

## **3. Teste de URLs (`urls`)

### 🔹 **Arquivo: `APIRoutesTest`**
- O Django usa **`reverse()`** para gerar URLs baseadas nos nomes de rota definidos no `urls.py`.
- O teste **verifica se as URLs da API estão configuradas corretamente**.
- Exemplo:
  - **`reverse("carrinho-list")`** → Gera a URL do endpoint de listagem de carrinhos.
  - **`resolve(reverse("carrinho-list"))`** → Verifica se a URL está associada à view correta (`CarrinhoViewSet`).

📌 **Objetivo dos testes de URLs:**  
✅ Garantir que as rotas estejam associadas corretamente às views.  
✅ Evitar problemas de roteamento e endpoints quebrados.  

---

## **4. Teste de Views (`views`)

### 🔹 **Arquivo: `PedidoViewTest`**
- Esse teste foca em **testar a API** usando `APIClient` (do Django Rest Framework).
- Como é um teste de **view mockada**, ele usa **`@patch`** para evitar chamadas reais ao banco de dados.
- O método **`test_listar_pedidos`**:
  - Simula uma requisição `GET` para listar pedidos.
  - Define um mock para a resposta da API (`Response`).
  - Verifica se a resposta contém os valores esperados (`status: "Pago"`, `totalPedido: "100.0"`).

📌 **Objetivo dos testes de views:**  
✅ Garantir que as requisições HTTP retornem os dados esperados.  
✅ Testar a resposta da API sem depender do banco de dados (mock).  

---

## **📌 Resumo Geral**

| Tipo de Teste  | O que é testado? | Exemplo no código |
|---------------|-----------------|------------------|
| **Models** | Métodos e atributos do modelo `Pedido` | `test_criar_pedido` |
| **Serializers** | Conversão de objetos para JSON | `test_serializar_pedido` |
| **URLs** | Roteamento correto da API | `test_pedido_urls` |
| **Views** | Respostas da API e integração | `test_listar_pedidos` |

Esses testes ajudam a garantir que o sistema esteja funcionando corretamente, cobrindo diferentes camadas da aplicação.

## 📌 Resumo

| Tipo de Teste       | O que testa?                            | Exemplo no código       |
|----------------------|----------------------------------------|-------------------------|
| **Testes Unitários** | Métodos individuais do modelo         | `PedidoModelTest`       |
| **Testes de Serialização** | Conversão de dados para JSON    | `PedidoSerializerTest`  |
| **Testes de Integração** | Comunicação entre componentes     | `PedidoViewTest`        |
| **Testes de URLs**   | Se as rotas direcionam corretamente   | `APIRoutesTest`         |
| **Testes de Mock**   | Simulação de chamadas à API          | `PedidoViewTest` com `@patch` |

Esses testes garantem que a aplicação funciona corretamente em diferentes níveis.
