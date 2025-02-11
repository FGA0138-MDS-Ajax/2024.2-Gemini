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

## **Passo 1: Clonar o Repositório**

Abra o terminal e execute:

```bash
git clone https://github.com/FGA0138-MDS-Ajax/2024.2-Gemini.git
cd 2024-2.Gemini
```

---

## **Passo 2: Mudar para a Branch Correta**

O código principal está na branch **integration**, então troque para ela:

```bash
git checkout integration
```

---

## **Passo 3: Instalar Dependências**

### **Backend (Django)**

Instale as dependências do backend:

```bash
cd 2024.2-Gemini
npm install
```

### **Frontend (React)**

O app React está dentro da pasta `my-react-app`, então instale as dependências:

```bash
cd my-react-app
npm install
```

---

## **Passo 4: Rodar o Banco de Dados com Docker**

Para rodar o PostgreSQL e o backend no Docker, volte para a raiz do projeto e execute:

```bash
docker-compose up --build
```

Isso inicializa o banco de dados PostgreSQL e outros serviços necessários.

---

## **Passo 5: Abrir o Docker Desktop**

O backend estará rodando em **http://localhost:8000/admin/**.

---

## **Passo 6: Rodar o Frontend React**

Para rodar o site, vá para a pasta `my-react-app` e inicie o servidor React:

```bash
cd my-react-app
npm run dev
```

O site estará acessível em **http://localhost:5173/home**

---

## **Passo 7: Configuração do `.env` (Se Necessário)**

Se o projeto exigir variáveis de ambiente, copie o arquivo de exemplo e configure:

```bash
cp .env.example .env  # Linux/Mac
copy .env.example .env  # Windows
```

Edite o `.env` conforme necessário.

---

## **Outros Comandos Údeis**

### **Parar o Docker**
```bash
docker-compose down
```

### **Reiniciar o Ambiente**
```bash
docker-compose down -v  # Remove containers e volumes
docker-compose up --build
```

### **Rodar Testes no Django**
```bash
python manage.py test
```

### **Rodar Testes no React**
```bash
npm test
```

---

## **Conclusão**

Agora seu projeto está rodando! Se encontrar problemas, siga os passos novamente ou consulte a documentação do projeto.

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
