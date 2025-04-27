EcoRecycle
==========

EcoRecycle is a platform that connects users with vendors for scheduling recycling pickups.
It allows users to register, login, find nearby vendors, schedule pickups, and track their requests.
Vendors can manage booking requests and pickup slots through their dashboards.

------------------------------------------------------------

Project Structure
-----------------
✅ Backend: Node.js + Express.js
✅ Frontend: React.js + Redux Toolkit

------------------------------------------------------------

Backend
-------
Technologies Used:
- Node.js
- Express.js
- Middleware Authentication (JWT-based)
- Modular Controllers and Routers

API Endpoints:

Authentication (/auth)
- POST /register → Register a new user
- POST /login → Authenticate user and return token

Vendor (/vendors)
- GET /search → Search available vendors

Slots (/slots)
- POST /create → (Protected) Create a new slot for pickup
- GET /available → List all available pickup slots
- POST /book/:id → (Protected) Book a specific slot

Middlewares:
- authMiddleware → Protects routes that require authentication

------------------------------------------------------------

Frontend
--------
Technologies Used:
- React.js
- React Router DOM (Routing)
- Redux Toolkit (State Management)

Frontend Routes (Pages):

| URL Path               | Component             | Description                         |
|-------------------------|-----------------------|-------------------------------------|
| /                       | LandingPage           | EcoRecycle landing page             |
| /login                  | Login                 | User login page                     |
| /register               | RegisterPage          | User registration page              |
| /contact                | ContactPage           | Contact us page                     |
| /how-it-works           | HowItWorks            | Explanation of the service          |
| /forVendors             | ForVendors            | Vendor information page             |
| /user/dashboard         | UserDashboard         | User's main dashboard               |
| /user/schedule          | SchedulePickup        | Page to schedule a pickup           |
| /user/requests          | UserRequests          | View user's previous requests       |
| /vendor/dashboard       | VendorDashboard       | Vendor's dashboard                  |
| /vendor/requests        | VendorRequests        | Vendor's received booking requests  |
| /logout                 | Logout                | Log out of the system               |

------------------------------------------------------------

State Management
----------------
- Redux Toolkit is used for:
  - Managing user authentication
  - Managing vendor data
  - Handling slot creation and booking actions
  - Managing user and vendor dashboard data

------------------------------------------------------------

Getting Started
---------------

Backend Setup:
$ cd backend
$ npm install
$ npm start

Frontend Setup:
$ cd frontend
$ npm install
$ npm start

------------------------------------------------------------

Suggested .env for Backend
---------------------------

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

------------------------------------------------------------

Folder Structure Overview
--------------------------

EcoRecycle/
 ├── backend/
 │    ├── controllers/
 │    │    ├── authController.js
 │    │    ├── vendorController.js
 │    │    └── slotController.js
 │    ├── middleware/
 │    │    └── authMiddleware.js
 │    ├── routes/
 │    │    ├── authRoutes.js
 │    │    ├── vendorRoutes.js
 │    │    └── slotRoutes.js
 │    ├── app.js (or server.js)
 │    └── package.json
 ├── frontend/
 │    ├── src/
 │    │    ├── components/
 │    │    ├── pages/
 │    │    ├── redux/
 │    │    ├── App.js
 │    │    └── index.js
 │    └── package.json
 └── README.txt

------------------------------------------------------------

Key Features
------------
- Secure user authentication
- Vendor discovery and booking
- Vendor dashboard to manage pickup requests
- User dashboard to schedule and track pickups
- Responsive frontend using React
- Scalable backend using Express

------------------------------------------------------------

Final Note
----------
EcoRecycle is designed to make recycling pickups easier, faster, and more efficient for everyone! ♻️
