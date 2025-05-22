# Project Structure
project-root/
├── backend/       # Laravel project
└── frontend/      # React.js project

# Requirements
PHP >= 8.1
Composer
Node.js >= 18.x
NPM
Laravel 10.x
React 18.x
MySQL
DATABASE_NAME:  project_manager

# Clone the Repository
git clone https://github.com/RamprosadG/Portfolio-Projects-CRUD-Application.git
cd Projects-CRUD-Application

# open the project in vs code
code .

# Backend Setup (Laravel)

# Navigate to backend folder:
cd backend


# Install dependencies:
composer install


# Run migrations
php artisan migrate

# Start the Laravel server:
php artisan serve
API will run at: http://127.0.0.1:8000


# Frontend Setup (React.js)

# Navigate to frontend folder:
cd ../frontend

# Install dependencies:
npm install

# Start the development server:
npm run dev
Frontend runs on: http://localhost:5173