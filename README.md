🚀 ASTRA — Project & Task Management Platform

ASTRA is a robust, scalable, and user-friendly full-stack web application built to simplify project and task management.
Developed as part of the WPT module during my C-DAC course, ASTRA empowers teams to create, assign, and track tasks with real-time progress insights.

✨ Features
✅ Project Management: Create, edit, and manage multiple projects effortlessly
✅ Task Tracking: Assign tasks with progress updates and status indicators
✅ Secure Authentication: JWT-based login & role-based authorization
✅ Role-Specific Dashboards: Separate views for Admins and Contributors
✅ Real-Time Updates: Dynamic project/task progress monitoring
✅ Modern UI/UX: Clean, responsive design built for all devices

🛠 Tech Stack
Frontend
⚛️ React.js
🎨 Bootstrap (Responsive UI)
🌐 Axios
Backend

🟢 Node.js
⚡ Express.js

Database
🗄 MySQL

Authentication
🔐 JWT (JSON Web Token) based login & protected routes

✨ Project Highlights
🔐 JWT Auth Flow — Secure authentication & authorization mechanism
🧠 RESTful APIs — Scalable APIs for managing projects, tasks, and users
📊 Dynamic Dashboards — Real-time task and project status visualization
🧩 Reusable Components — Modular React components for better maintainability
📱 Responsive Design — Optimized for desktop, tablet, and mobile

📡 API Endpoints
🔑 Authentication
POST /api/auth/register → Register a new user
POST /api/auth/login → Login & get JWT token

👤 Users
GET /api/users/all-users → Fetch all users (Admin only)

📂 Projects
GET /api/projects/ → Get all projects
POST /api/projects/ → Create a new project
PUT /api/projects/:id → Update a project by ID
DELETE /api/projects/:id → Delete a project by ID
GET /api/projects/:id → Get project details by ID
GET /api/projects/user/assigned → Get projects assigned to the logged-in user
