# 💬 Real-Time Chat Application

A modern full-stack real-time chat application built with **React**, **Express**, **PostgreSQL**, **Prisma**, and **Socket.io**. The project provides secure authentication, instant messaging through WebSockets, and a responsive user interface powered by Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 🌐 Live Demo

🔗 **https://react-express-postgres-chat.onrender.com/**

---

## ✨ Features

- 💬 **Real-Time Messaging** using Socket.io for instant communication.
- 🔐 **JWT Authentication** with secure password hashing via bcrypt.
- 👤 **User Registration & Login** with protected routes.
- 🗄️ **Persistent Data Storage** powered by PostgreSQL and Prisma ORM.
- ⚡ **Modern Frontend** built with React 18 and Vite.
- 🎨 **Responsive UI** styled with Tailwind CSS and DaisyUI.
- 📦 **Global State Management** using Zustand.
- 📝 **End-to-End TypeScript** for improved reliability and maintainability.

---

## 🛠️ Tech Stack

### Frontend

- React 18
- Vite
- TypeScript
- Zustand
- Tailwind CSS
- DaisyUI

### Backend

- Node.js
- Express.js 5
- Socket.io
- JSON Web Tokens (JWT)
- bcryptjs

### Database

- PostgreSQL
- Prisma ORM

---

## 📂 Project Structure

````text
## 📂 Project Structure

```text
.
├── backend/
│   ├── prisma/              # Database schema
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Authentication & middleware
│   │   ├── socket/          # Socket.io configuration
│   │   ├── utils/           # Helper functions
│   │   └── index.ts         # Server entry point
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── hooks/           # Custom hooks
│   │   ├── context/         # React Context providers
│   │   ├── zustand/         # State management
│   │   ├── utils/           # Utility functions
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── package.json
└── tsconfig.json
````

---

## 🚀 Getting Started

### Prerequisites

Before running the project, ensure you have installed:

- Node.js **18+**
- npm
- PostgreSQL (local or cloud-hosted)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/andriibabiuk/react-express-postgres-chat.git
cd react-express-postgres-chat
```

---

### 2️⃣ Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000

DATABASE_URL="postgresql://username:password@localhost:5432/chat_db?schema=public"

JWT_SECRET="your_super_secret_jwt_key_here"

NODE_ENV="development"
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Generate Prisma Client

```bash
npx prisma generate
```

---

### 5️⃣ Sync the Database Schema

```bash
npx prisma db push
```

---

### 6️⃣ Start the Backend

```bash
npm run dev
```

---

### 7️⃣ Start the Frontend

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

## 📸 Highlights

- ⚡ Instant real-time communication
- 🔒 Secure authentication with JWT
- 📱 Responsive design for desktop and mobile devices
- 🗄️ PostgreSQL-backed persistent conversations
- 🧩 Modular architecture with Prisma ORM and TypeScript
