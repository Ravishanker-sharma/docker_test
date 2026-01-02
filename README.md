# 🐾 Animal Facts Website

**(Learning Project: Docker, Docker Compose & CI/CD)**

## 📌 Why this project exists

This project was built **primarily to learn and practice real-world DevOps workflows**, not just to build a web app.

The goal was to:

* Learn **Docker by containerizing a full-stack application**
* Understand **Docker Compose** for managing multiple services together
* Build a **CI/CD pipeline using GitHub Actions**
* Deploy automatically to a **Linux VM using a self-hosted runner**
* Experience and debug **real deployment issues** (Compose versions, container conflicts, runner paths, etc.)

The Animal Facts app itself is intentionally simple so the focus stays on **infrastructure, deployment, and workflow automation**.

---

## 🧠 What I learned from this project

* Difference between **Docker vs Docker Compose**
* How to migrate from **manual `docker run` commands to Compose**
* How **GitHub Actions self-hosted runners** work internally
* How CI/CD pipelines interact with Docker in real environments
* Managing container lifecycle (`build`, `down`, `up`, `restart`)
* Debugging production-like issues (naming conflicts, missing tools, workspace paths)

---

## 🧩 Project Overview

A full-stack web application that displays interesting facts about animals using:

* **FastAPI** as the backend
* **React + Vite** as the frontend

The application is used as a **vehicle to practice containerization and deployment**, not as a product.

---

## 🚀 Features (Application-level)

* Interactive dashboard with animal categories
* Dynamic facts fetched from Wikipedia
* Simple login/logout simulation
* Responsive UI with dark mode & glassmorphism
* Frontend–backend communication over HTTP

---

## 🛠️ Tech Stack

### Application

* **Frontend**: React, Vite, Vanilla CSS
* **Backend**: FastAPI, Python, Wikipedia API

### DevOps / Infrastructure

* **Docker** – containerization
* **Docker Compose** – multi-service orchestration
* **GitHub Actions** – CI/CD automation
* **Self-hosted Linux VM** – deployment target

---

## 📦 Project Structure

```bash
├── backend/            # FastAPI application
│   ├── main.py
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/           # React application
│   ├── src/
│   ├── Dockerfile
│   └── vite.config.js
├── docker-compose.yml  # Service orchestration (backend + frontend)
├── .github/workflows/
│   └── deploy.yml      # CI/CD pipeline (GitHub Actions)
```

---

## 🔧 Running the Project (Docker – Recommended)

### Prerequisites

* Docker
* Docker Compose

### Steps

```bash
git clone <repository-url>
cd docker_test
docker-compose up -d --build
```

### Access

* Frontend → `http://localhost:5173`
* Backend API Docs → `http://localhost:8000/docs`

---

## 🧪 Running Without Docker (Optional)

This is provided mainly for understanding the app, not the deployment.

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Login (Demo Only)

* **Username**: `user`
* **Password**: `password`

*(Authentication is intentionally simple to keep focus on DevOps learning.)*

---

## 🔄 Environment Handling

The frontend dynamically switches backend API URLs based on:

* Localhost
* VM IP / external access

This was done to understand **networking behavior in containerized environments**.

---

## 🚀 CI/CD & Deployment

* GitHub Actions workflow triggers on:

  * Push to `main`
  * Pull request merge into `main`
* Uses a **self-hosted runner on a Linux VM**
* Workflow:

  1. Checkout code
  2. Build images using Docker Compose
  3. Stop old containers
  4. Deploy updated services automatically

This setup mirrors **real-world small production deployments**.

---

## 🧠 Key takeaway

> This project is less about animal facts and more about **learning how modern applications are built, containerized, and deployed automatically**.

