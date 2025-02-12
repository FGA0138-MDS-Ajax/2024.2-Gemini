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
├── requirements.txt         # Dependências gerais do projeto
├── requirements.testing.txt # Dependências para rodar os testes
├── manage.py                # Gerenciador do Django
└── README.md                # Este arquivo 📌
```

---

## **⚙️ Configuração**
### **📌 1. Criar e Configurar o `.env`**
```bash
cp .env.example .env
```
Edite o `.env` conforme necessário (banco de dados, chaves, etc.).

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
