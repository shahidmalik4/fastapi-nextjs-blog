# 📝 Fullstack Blog App

A minimal fullstack blog application built with **FastAPI** (backend), **Next.js** (frontend), and **SQLite** as the database. It supports basic blog post CRUD operations, dynamic routing, and a clean API-first architecture.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/)
- **Database**: SQLite (via SQLAlchemy or equivalent ORM)
- **Language**: Python, TypeScript/JavaScript

---

## 📁 Project Structure
```
blogstack/
├── backend/              # FastAPI backend
│   ├── main.py
│   ├── models.py
│   ├── crud.py
│   ├── database.py
│   └── ...
├── frontend/             # Next.js frontend
│   ├── pages/
│   ├── components/
│   └── ...
├── .gitignore
└── README.md
```
---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fastapi-nextjs-blog.git
cd fastapi-nextjs-blog
```

---

### 2. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

- Visit: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`

---

### 3. Frontend Setup (Next.js)

```bash
cd ../frontend
npm install
npm run dev
```

- Visit: `http://localhost:3000`

---

## 🛠 Features

- Create, read, update, delete blog posts
- RESTful API using FastAPI
- Dynamic frontend pages with Next.js
- SQLite database (lightweight, zero-config)
- API auto docs via Swagger (`/docs`)

---

## 📦 Requirements

- Python 3.8+
- Node.js 16+
- SQLite (default, no setup needed)

---
