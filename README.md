🛠️ Service Desk Application
A full-stack web application built for users to raise service tickets and for admins to manage them efficiently.

🌐 Tech Stack
Frontend: HTML, CSS, JavaScript (React)

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT

Deployment:  Vercel for frontend, Render/Heroku for backend

📁 Project Structure
pgsql
Copy
Edit
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── ticketRoutes.js
│   └── server.js
├── frontend
│   └── src
│       └── index.html (React App)
├── .env
├── package.json

🔐 API Routes Summary
User Auth Routes (/api/auth)
POST /register – Register a new user

POST /login – Login existing user

Ticket Routes (/api/tickets)
POST / – Create a ticket (User)

GET /my – View user-specific tickets

GET / – View all tickets (Admin)

PUT /:id – Update ticket status/details

Middleware:

protect: JWT authentication middleware to protect routes.

🚀 Getting Started
bash
Copy
Edit
# Clone the repo
git clone https://github.com/yourusername/servicedesk.git

# Navigate to the project directory
cd servicedesk

# Install dependencies
npm install

# Run backend
npm run server

# Run frontend (if React setup)
cd frontend
npm start

📌 Features
📝 Create and track service tickets

🔐 JWT-based user authentication

🛡️ Role-based access (user/admin)

📊 Admin panel for managing tickets

⚡ Real-time UI with status updates

📫 Contact
For any issues or suggestions, feel free to open an issue or connect via LinkedIn.
