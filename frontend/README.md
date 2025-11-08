# 🍽️ Deliva - Frontend

Este diretório contém o **frontend da aplicação Deliva**, desenvolvido em **React** com **Vite**.  
Ele é responsável pela interface visual, exibição dos pratos, gerenciamento do carrinho e interação com o usuário.

---

## 🧰 Stack Utilizada

| Tecnologia | Função |
|-----------|--------|
| **React** | Biblioteca principal para criação da interface |
| **Vite** | Ferramenta de build e servidor de desenvolvimento rápido |
| **Context API** | Controle de estado global (carrinho, usuário, lista de produtos) |
| **CSS Puro** | Estilização e responsividade |
| **React Router DOM** | Navegação entre páginas e componentes |

---

## 🗂️ Estrutura de Pastas

```
frontend/
 ├─ public/               # Imagens públicas e estáticas
 ├─ src/
 │   ├─ assets/           # Imagens e arquivos estáticos do projeto
 │   ├─ components/       # Componentes reutilizáveis (Navbar, Menu, Card, etc.)
 │   ├─ context/          # StoreContext para gerenciamento global do carrinho
 │   ├─ pages/            # Páginas principais da aplicação
 │   │   ├─ Home/
 │   │   ├─ Cart/
 │   │   └─ Checkout/     # (futuro)
 │   ├─ App.jsx           # Estrutura principal do app
 │   ├─ main.jsx          # Ponto de entrada da aplicação React
 ├─ .env                  # Variáveis de ambiente (URL do backend)
 ├─ package.json
 └─ vite.config.js
```

---

## ⚙️ Configuração do Ambiente

Crie um arquivo `.env` na pasta `frontend` contendo:

```
VITE_API_URL=http://localhost:4000
```

No código, use:

```js
import.meta.env.VITE_API_URL
```

---

## ▶️ Como Rodar o Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

---

## 🔗 Comunicação com o Backend

O frontend consome dados da API através da variável:

```
VITE_API_URL
```

Quando o backend estiver operacional, as requisições substituirão os dados locais, como:

- Listar pratos: `GET /food`
- Cadastro: `POST /auth/register`
- Login: `POST /auth/login`
- Finalizar pedido: `POST /order`

---

## 💼 Gerenciamento de Estado (Carrinho)

O projeto utiliza **Context API** para:

- Adicionar e remover itens do carrinho
- Calcular o total do pedido
- Compartilhar estado entre componentes

Esta abordagem mantém o código simples, limpo e sem necessidade de libs como Redux.

---

## 🎨 Estilização

- Layout responsivo
- UI minimalista
- CSS organizado por componente

---

## ✅ Status do Frontend

| Módulo | Status |
|-------|--------|
| Interface Base | Concluída |
| Listagem de Pratos | Concluída |
| Carrinho (Modo Local) | Concluído |
| Autenticação | Aguardando Backend |
| Checkout / Pagamento | Aguardando Backend |

---

## 👨‍💻 Autor

Desenvolvido por **Bryan Alvarenga**  
```
Focado em construir soluções claras, funcionais e bem estruturadas.
```
