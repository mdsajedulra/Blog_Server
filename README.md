# Blog Platform API

A feature-rich backend API for a blogging platform, built using **TypeScript**, **Express.js**, and **Mongoose**. This project implements role-based access control, user authentication, and dynamic blog management.

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB (Mongoose)**

---

## 📦 NPM Packages

- `ts-node-dev` – Hot-reloading and TypeScript compilation for efficient development.
- `zod` – For request validation and schema enforcement.
- `bcryptjs` – For secure password hashing.
- `jsonwebtoken` – For authentication using JWTs.
- `dotenv` – For managing environment variables.

---

## ✨ Features

### User Roles

- **Admin**:

  - Block users.
  - Delete any blog.

- **User**:
  - Register and log in securely.
  - Create, update, and delete their own blogs.

### Blog Management

- Create, update, delete blogs.
- Public API for fetching blogs with:
  - **Search**: Find blogs by title or content.
  - **Sort**: Sort blogs by creation date or title.
  - **Filter**: Filter blogs by author.

### Authentication & Authorization

- JWT-based authentication.
- Role-based access control (Admin/User).

### Error Handling

- Centralized error responses with detailed messages and stack traces for debugging.

---

## ⚙️ Prerequisites

Ensure you have the following installed:

1. **Node.js** (v14 or above)
2. **npm**
3. **MongoDB** (Local or Atlas)

---

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Blog_Server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a .env file in the root directory and add the following:

env

```bash
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
```

````bash
### 4. Run the Application
Development Mode:

```bash

npm run dev
Production Mode:
````

```bash

npm run start
```

## 🔗 live Link

https://assignment-03-blog-webiste-backend.vercel.app
