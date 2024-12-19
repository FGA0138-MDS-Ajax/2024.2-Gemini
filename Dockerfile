# Use a imagem oficial do Python
FROM python:3.10

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY requirements.txt .

# Instala as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do projeto para o diretório de trabalho
COPY . .

# Exposição da porta padrão do Django
EXPOSE 8000

# Comando padrão ao iniciar o container
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
