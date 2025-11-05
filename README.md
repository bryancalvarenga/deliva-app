# Deliva — Sistema de Delivery Online

Aplicação full-stack de pedidos de comida, em desenvolvimento incremental.

> **Projeto desenvolvido com referência ao vídeo:**  
> *"How To Create Full Stack Food Delivery Website In React JS, MongoDB, Express, Node JS & Stripe"*  
> (YouTube) — porém **personalizado, estruturado e expandido manualmente** durante o desenvolvimento.

![Preview](frontend/public/deliva-preview-banner.png)

---

## 📦 Visão Geral

O **Deliva** é um app de delivery com foco em:
- Catálogo de produtos
- Carrinho e fluxo de checkout
- Autenticação de usuário (JWT)
- Gestão de pedidos
- Integração de pagamentos (Stripe)

> **Status:** iniciando pelo **frontend (React + Vite + Bootstrap)**.  
> O **backend (Node.js/Express/MongoDB)** e o **admin** serão adicionados nas próximas etapas.

---

## 🗂 Estrutura do Projeto

```
deliva-app/
├─ frontend/     # Interface do usuário (React + Vite)
├─ backend/      # API (Node.js + Express + MongoDB) — (futuro)
└─ admin/        # Painel Administrativo — (futuro)
```

---

## 🚀 Executando o Frontend

```bash
cd frontend
npm install
npm run dev
```

- App padrão do Vite: http://localhost:5173

---

## 🧰 Tecnologias (até o momento)

- **React** + **Vite**
- **Bootstrap** (estilização base)

### Próximas etapas (planejado)
- **Node.js** + **Express**
- **MongoDB** (Atlas) + **Mongoose**
- **JWT** (autenticação)
- **Stripe** (pagamentos)
- **Admin Panel**

---

## 📝 Roadmap

- [x] Base do frontend (componentes, layout inicial)
- [ ] Lógica de carrinho
- [ ] Autenticação (login/registro)
- [ ] API REST (produtos, pedidos, usuários)
- [ ] Integração Stripe
- [ ] Painel administrativo
- [ ] Deploy (Vercel + Render/Railway)

---

## 🤝 Contribuição

Commits semânticos são bem-vindos:

```
feat: nova funcionalidade
fix: correção de bug
chore: task de manutenção
refactor: melhoria interna
docs: ajustes de documentação
style: ajuste visual (sem lógica)
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

Feito por **Bryan Alvarenga** 🚀
