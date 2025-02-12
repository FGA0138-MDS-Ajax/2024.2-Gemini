<!-- Título centralizado -->
<div align="center">
  <h2>Bem-vindo ao repositório da Gemini! </h2>
</div> 

<!-- Título centralizado -->
<div align="center">
  <h1> FGR - E-commerce <sub style="font-size:10px;"></sub></h1>
</div>

<!-- Título centralizado -->
<div align="center">
  <h2>  Objetivo </h2>
</div> 

• A FGR ao desenvolver o seu próprio marketplace a Fórmula Gama Racing consegue centralizar suas vendas de produtos em um lugar só, o que antes seria uma conversa no whatsapp ou no instagram para discutir os valores dos produtos, o tamanho das camisetas, onde elas seriam entregues, quem estava comprando e qual era o método de pagamento, passa a ser automatizado em seu website. </h1>
• Isso economiza tempo de ambas as partes, dado que o comprador não precisa que um integrante da FGR esteja disponível para atendê-lo e os membros da equipe podem se dedicar em outras funções.
• Com isso, o gerenciamento de vendas e pedidos da equipe irá melhorar, uma vez que poderão ver se um pedido ainda deve ser entregue, assim como o número de pedidos em um determinado período facilitando o controle do estoque aliado a uma forma mais simples de analisar quais itens estão dando maior retorno financeiro e quais podem ser melhor divulgados.

<!-- Título centralizado -->
<div align="center">
  <h2> Funcionalidades </h2>
</div> 

Este projeto oferece as seguintes funcionalidades:

- Introdução da equipe de competição para os visitantes do site, apresentando sua história, conquistas e integrantes;

- Destaque dos diferentes patrocinadores da FGR;

- Registro e login de contas;

- Plataforma de Ecommerce para venda dos produtos da equipe;

- Página de Administrador para edição do site e gerenciamento de usuários e vendas;


<!-- Título centralizado -->
<div align="center">
  <h2> Como executar o projeto </h2>
</div> 



### 1. Pré-requisitos
Para garantir uma colaboração de sucesso, estabelecemos os seguintes critérios para o projeto abrir e executar:
- Git - Para clonar o repositório
- Node.js (LTS recomendado) - Para rodar o React e instalar pacotes NPM
- Python 3.12.9 - Para rodar o backend Django
- Docker - Para rodar o ambiente do banco de dados e backend
- Visual Studio Code (Opcional) - Para editar o código
<!--- 
```
No terminal:


``` 
--->



## **📁 Estrutura do Projeto**
## **🛒 Loja - Backend**

### **📌 Configuração do Ambiente**

Este projeto utiliza **Django** e **Django REST Framework** para gerenciar a API do sistema de loja.

### **📁 Estrutura do Projeto**
```
.
├── backend/                 # Configurações do Django
├── loja/                    # Aplicação principal
├── payments/                # Módulo de pagamentos
├── products/                # Módulo de produtos
├── users/                   # Módulo de usuários
├── .env                     # Variáveis de ambiente
├── .env.example             # Exemplo do arquivo de configuração
├── docker-compose.yml       # Configuração do Docker Compose
├── dockerfile               # Construção Imagem Docker 
├── requirements.txt         # Dependências gerais do projeto
├── my-react-app/            # O app React
├── requirements.txt         # Dependências gerais do projeto
├── requirements.testing.txt # Dependências para rodar os testes
├── manage.py                # Gerenciador do Django
└── README.md                # Este arquivo 📌
```

---


## **Passo 1: Clonar o Repositório**

Abra o terminal e execute:

```bash
git clone https://github.com/FGA0138-MDS-Ajax/2024.2-Gemini.git
cd 2024-2.Gemini
```




## **Passo 2: Mudar para a Branch Correta**

O código principal está na branch **integration**, então troque para ela:

```bash
git checkout integration
```

---





## **📌 Passo 3. Criar e Configurar o `.env`**
## **⚙️ Configuração**
### **📌 1. Criar e Configurar o `.env`**
```bash
cp .env.example .env
```
Edite o `.env` conforme necessário (banco de dados, chaves, etc.).

---

## **Passo 4: Instalar Dependências**

### **Backend (Django)**

Instale as dependências do backend:

```bash
docker compose up -d
```

### **Frontend (React)**

O app React está dentro da pasta `my-react-app`, então instale as dependências:

```bash
cd my-react-app
npm install
```

---

## **Passo 5: Acessar o Banco de Dados com Docker**

Com a aplicação rodando.

### 🔍 **Acessando o banco de dados dentro do container**
Caso queira acessar o banco diretamente dentro do container, siga os passos abaixo:

1️⃣ **Entre no container do PostgreSQL**:
   ```bash
   docker exec -it postgres_database bash
   ```

2️⃣ **Acesse o PostgreSQL** usando o usuário definido no `docker-compose.yml`:
   ```bash
   psql -U <seu_usuario> -d <seu_banco_de_dados>
   ```
   Exemplo:
   ```bash
   psql -U postgres -d meu_banco
   ```

3️⃣ **Visualize as tabelas**:
   ```sql
   \dt
   ```

4️⃣ **Saia do PostgreSQL e do container**:
   - Para sair do PostgreSQL, digite:
     ```bash
     \q
     ```
   - Para sair do container, use:
     ```bash
     exit

---

## **Passo 6: URL de acesso ao painel administrativo**

O backend estará rodando em **http://localhost:8000/admin/**.

---

## **Passo 7: Rodar o Frontend React**

Para rodar o site, vá para a pasta `my-react-app` e inicie o servidor React:

```bash
cd my-react-app
npm run dev
```

O site estará acessível em **http://localhost:5173/home**

---

## **🧪 Rodando os Testes**
Os testes são escritos utilizando **pytest** e cobrem os modelos, serializadores, views e URLs da aplicação.

Para rodar os testes, é necessário que os serviços estejam em execução via **Docker Compose**.

### **📌 2. Subir os serviços do Docker**
Antes de rodar os testes, inicie os containers do projeto:
```bash
docker-compose up -d
```

Isso iniciará os serviços, incluindo o container `django_backend`, que será utilizado para rodar os testes.

### **📌 3. Acessar o container `django_backend`**
Agora, entre no container onde o Django está rodando:
```bash
docker exec -it django_backend bash
```

---

### **📌 4. Executar os testes com cobertura de código**
Agora, ainda dentro do container `django_backend`, execute:
```bash
pytest --cov=loja --cov-report=term-missing --disable-warnings
```

Se quiser um **relatório HTML** da cobertura de testes, use:
```bash
pytest --cov=loja --cov-report=html
```

Depois, para acessar o relatório gerado:
```bash
xdg-open htmlcov/index.html  # Linux
open htmlcov/index.html      # macOS
start htmlcov/index.html     # Windows (CMD)
```

---

### **📌 5. Sair do container**
Após rodar os testes, basta sair do container:
```bash
exit
```

Se quiser parar os serviços do Docker após os testes, execute:
```bash
docker-compose down
```

---

##  8. Criar superusuário
Acessar o container backend:
```bash
docker exec -it postgresql_database
```

Criar o superusuário:
```bash
python manage.py createsuperuser
```






--- 

## **Outros Comandos Úteis**

### **Parar o Docker**
```bash
docker-compose down
```

### **Reiniciar o Ambiente**
```bash
docker-compose down -v  # Remove containers e volumes
docker-compose up --build
```





### **Rodar Testes no React**
```bash
npm test
```

---

## **Conclusão**

Agora o projeto está rodando! Se encontrar problemas, siga os passos novamente ou consulte a documentação do projeto.

Se precisar de ajuda, crie uma **issue** no repositório ou entre em contato com a equipe.


<div align="center">
  <h2> Colaboradores </h2>
</div>   
<center>
<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center">
            <a href="https://github.com/eduardoferre">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/67663168?v=4" width="150px;"/>
                <h5 href = "https://github.com/andre-maia51" class="text-center">Eduardo Ferreira</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/Edzada">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/122990164?v=4" width="150px;"/>
                <h5 class="text-center">Esdras de Sousa</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/felipeacampelo">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/169858938?v=4" width="150px;"/>
                <h5 class="text-center">Felipe Campelo</h5>
            </a>
        </td>
        </td>
        <td align="center">
            <a href="https://github.com/jv-ibiapina">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/151571305?v=4" width="150px;"/>
                <h5 class="text-center">João Vitor Sales</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/luizfaria1989">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/90045018?v=4" width="150px;"/>
                <h5 class="text-center">Luiz Guilherme</h5>
            </a>
        </td>
          <td align="center">
            <a href="https://github.com/iBizu">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/108238526?v=4" width="150px;"/>
                <h5 class="text-center">Matheus Menezes</h5>
            </a>
        </td>
          <td align="center">
            <a href="https://github.com/miguelpiresgomes25">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/119467483?v=4" width="150px;"/>
                <h5 class="text-center">Miguel Pires</h5>
            </a>
        </td>
         <td align="center">
            <a href="https://github.com/pedrorocharfl">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/144711802?v=4" width="150px;"/>
                <h5 class="text-center">Pedro Rocha</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/audittmega">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/143733162?v=4" width="150px;"/>
                <h5 class="text-center">Thiago Tonin</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/uires2023">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/88348553?v=4" width="150px;"/>
                <h5 class="text-center">Uires Carlos</h5>
            </a>
        </td>
    
</table>
</center>
<table>
  <tr>


<div align="center">
  <h2> Documentação </h2>
</div> 
 

### A DOCUMENTAÇÃO DO PROJETO PODE SER ENCONTRADA CLICANDO [AQUI](https://fga0138-mds-ajax.github.io/2024.2-Gemini/).
