# 🏨 Hotel Booking App

A Full Stack Hotel Booking Web Application built using the **MERN Stack** (MongoDB, Express, React, Node.js).  
Includes user booking, Clerk-based authentication, admin dashboard, and hotel/room management.

---

## 🚀 Features

- 🔐 User Authentication with Clerk
- 🏨 Browse Hotels and Rooms
- 📅 Book Hotel Rooms
- 📁 View Booking History
- 🧑‍💼 Admin Panel for Hotel & Room Management
- 📊 Dashboard with Admin Stats
- ⚙️ REST API Backend using Express.js
- 🎨 Responsive UI using React & CSS
- ☁️ Deployed on **Vercel** (Frontend) and **Render/MongoDB Atlas** (Backend/Database)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Clerk (Authentication)
- Vercel (Deployment)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Bcrypt (Password encryption)
- JWT (Token management)

---

## 📁 Folder Structure
/client → Frontend React App
/server → Backend Express Serve

## 🧑‍💻 Getting Started

## 1. Clone the Repository

git clone https://github.com/supriya2820/Hotel-Booking.git

## 2.Install Dependencies

### Frontend
cd client
npm install

### Backend
cd ../server
npm install

## 3. Configure Environment Variables

### Create a .env file inside the /server folder:
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

### If you're using Clerk, also create a .env file in the /client folder:
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

## 4. Run the Development Servers

### Start the backend
cd server
npm run dev

### Open a new terminal for frontend:
### Start the frontend
cd client
npm start

## 🌐 Deployment
🚀 Frontend: Vercel
🛠️ Backend: Render / Railway
💾 Database: MongoDB Atlas

## To Do (Since Backend is Incomplete)
### 🚧 Work In Progress

- [ ] Complete backend API routes
- [ ] Implement admin hotel/room control
- [ ] Improve error handling and validations
- [ ] Add user profile settings

### 🔗 Live Demo
Link will be added after deployment

