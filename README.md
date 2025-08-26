****🏡 Landora – Property Management System****


A MERN stack (MongoDB, Express.js, React.js, Node.js) web application for managing properties efficiently.

**🚀 Features**

🏠 Property Management – Add, edit, delete, and search properties.

📸 Image Uploads with Cloudinary.

📑 PDF Report Generation (property listings, tenant reports, etc.).

📱 Responsive UI using React + Material UI.

🛠️ Tech Stack

**Frontend**

⚛️ React.js

🎨 Material UI

🔗 Axios

**Backend**

🟢 Node.js

🚂 Express.js

🍃 MongoDB with Mongoose

🔑 JWT Authentication

**Other Tools**

☁️ Cloudinary (Image Uploads)

📝 jsPDF / AutoTable (Reports)

🐙 Git & GitHub

📂 Project Structure
Landora-Property-Management-System/
│
├── backend/              # Node.js + Express + MongoDB
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   └── server.js         # Entry point
│
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Pages (Home, PrivacyPolicy, PropertyList, etc.)
│   │   └── App.js        # Main React app
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json

**⚙️ Installation & Setup**
1️⃣ Clone the repository
git clone https://github.com/KenuriPerera/Landora-Property-Management-System.git
cd Landora-Property-Management-System

**2️⃣ Install dependencies**

For backend:

cd backend
npm install


**For frontend:**

cd ../frontend
npm install

**3️⃣ Create environment variables**

Create a .env file inside backend/ with the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

**4️⃣ Run the app**

Backend:

cd backend
npm start


Frontend:

cd frontend
npm start

