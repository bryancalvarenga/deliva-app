# 🍽️ Deliva — Plataforma de Delivery Online

Aplicação **full-stack** para pedidos de comida, com catálogo, carrinho, autenticação e sistema de pedidos.

Este projeto está sendo desenvolvido com foco em **organização**, **escalabilidade** e **padronização**, seguindo uma arquitetura clara de frontend + backend.

---

## ✨ Visão Geral

O **Deliva** oferece:

- Catálogo de produtos por categorias
- Carrinho dinâmico com Context API
- Experiência de usuário fluida e responsiva
- Backend estruturado para autenticação, pedidos e gerenciamento de produtos
- Preparado para integração com **Stripe / Pix**

Atualmente, o frontend está funcional e o backend está em fase de construção.

---

## 🧱 Arquitetura do Projeto

```
deliva/
 ├─ frontend/      # Interface do usuário (React + Vite)
 ├─ backend/       # API REST (Node.js + Express + MongoDB)
 └─ admin/         # Painel administrativo (em planejamento)
```

Cada parte possui seu próprio **README** com instruções específicas.

---

## 🛠️ Tecnologias Principais

| Camada | Tecnologias |
|-------|-------------|
| **Frontend** | React, Vite, Context API, CSS responsivo |
| **Backend** | Node.js, Express, MongoDB (Mongoose), JWT, Multer, Stripe |
| **Infra** | Variáveis de ambiente (.env), Organização em pastas, Scripts NPM |

---

## ▶️ Como Executar o Projeto

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Acesse:
```
http://localhost:5173
```

### Backend
```bash
cd backend
npm install
npm run dev
```

A API iniciará em:
```
http://localhost:4000
```

> Certifique-se de criar o arquivo `.env` no backend conforme o exemplo disponível lá.

---

## 🚀 Roadmap de Desenvolvimento

| Etapa | Status |
|------|:------:|
| UI e design responsivo | ✅ |
| Carrinho com Context API | ✅ |
| Transição para backend | ✅ Em andamento |
| Autenticação (JWT) | 🔜 |
| CRUD de produtos (admin) | 🔜 |
| Checkout + Pagamentos | 📝 Avaliando Stripe / Pix |
| Deploy (Frontend + Backend) | 📝 Após conclusão das rotas principais |

---

## 🤝 Convenções de Código

- Componentes e rotas organizados por contexto
- Nomeação clara e padronizada
- Commits seguindo padrão:

```
feat: nova funcionalidade
fix: correção de bug
refactor: melhoria sem alterar comportamento
style: ajustes visuais (sem lógica)
docs: documentação
chore: manutenção
```

