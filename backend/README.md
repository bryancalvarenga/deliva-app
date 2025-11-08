# 🍽️ Deliva - Backend

Este diretório contém o **backend da aplicação Deliva**, responsável por autenticação, gerenciamento de produtos, pedidos, upload de imagens e integração com pagamentos.

O backend foi desenvolvido em **Node.js** utilizando o framework **Express** e o banco de dados **MongoDB** (via Mongoose).

---

## 📦 Dependências Principais

| Pacote | Função |
|-------|--------|
| **express** | Framework que gerencia o servidor HTTP e as rotas da API. |
| **mongoose** | ORM para conectar e modelar dados no MongoDB através de Schemas. |
| **jsonwebtoken** | Utilizado para gerar e validar tokens de autenticação (JWT). |
| **bcrypt** | Criptografa senhas antes de salvar no banco, aumentando a segurança. |
| **cors** | Permite que o frontend se comunique com o backend mesmo estando em domínios/portas diferentes. |
| **dotenv** | Carrega variáveis de ambiente definidas no arquivo `.env`. |
| **body-parser** | Interpreta o corpo das requisições (JSON ou formulários). |
| **multer** | Responsável por lidar com upload de arquivos, como imagens dos pratos. |
| **stripe** | Biblioteca para processar pagamentos. |
| **validator** | Valida dados de entrada, como e-mail, campos vazios, formatos etc. |
| **nodemon** (dev) | Reinicia o servidor automaticamente sempre que o código for alterado (apenas no desenvolvimento). |

---

## 🗂️ Estrutura de Pastas

```
backend/
 ├─ config/          # Configurações do sistema (ex: conexão ao banco)
 ├─ controllers/     # Lógica e manipulação das requisições
 ├─ middleware/      # Middlewares (ex: autenticação JWT)
 ├─ models/          # Schemas e modelos do MongoDB
 ├─ routes/          # Rotas da API organizadas por função
 ├─ uploads/         # Pasta para armazenamento de imagens enviadas
 ├─ .env             # Variáveis de ambiente (não versionado)
 ├─ .env.example     # Modelo de variáveis de ambiente
 ├─ package.json
 └─ server.js        # Inicialização do servidor e carregamento das rotas
```

---

## ⚙️ Configuração do Ambiente

Antes de iniciar o backend, crie o arquivo `.env` baseado em `.env.example`:

```
MONGO_URL=sua_string_de_conexao
JWT_SECRET=chave_para_assinar_tokens
STRIPE_SECRET_KEY=sua_chave_da_stripe
PORT=4000
```

> Nunca committe o `.env`. Ele contém informações sensíveis.

---

## ▶️ Como Rodar o Backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o servidor em modo desenvolvimento:

```bash
npm run dev
```

O backend irá iniciar em:
```
http://localhost:4000
```

---

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Token)** para autenticação.  
O cliente recebe um token ao fazer login e deve enviá-lo no header:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 💾 Banco de Dados

Este backend utiliza **MongoDB**.  
Recomendado usar o **MongoDB Atlas** (versão na nuvem).

---

## 📝 Upload de Imagens

As imagens enviadas via formulário (ex: foto do prato) são salvas em:

```
/uploads
```

No deploy real, recomenda-se usar AWS S3 ou Cloudinary.

---

## 💳 Pagamentos

Integração realizada com **Stripe**.  
Durante desenvolvimento, pode ser utilizado **modo de testes**.

---

## 👨‍💻 Autor

Desenvolvido por **Bryan Alvarenga**  
Estudante de Engenharia de Software • Apaixonado por construção de sistemas funcionais

