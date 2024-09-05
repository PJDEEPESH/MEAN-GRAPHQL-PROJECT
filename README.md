# MEAN Stack Application with Angular and GraphQL

This project is a MEAN (MongoDB, Express, Angular, Node.js) stack application that retrieves data from MongoDB using GraphQL and displays it on an Angular frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/)
- Angular CLI: Install globally using npm
  ```bash
  npm install -g @angular/cli
Project Setup and Running Locally
1. Clone the repository

bash

git clone <your-repository-url>
cd <your-repository-folder>

2. Backend Setup (Node.js + GraphQL)

Navigate to the backend directory (typically the root folder or server folder):

bash

cd backend

Install the backend dependencies:

bash

npm install

Set up Environment Variables

Create a .env file in the backend folder with the following variables:

bash

MONGODB_URI=mongodb://localhost:27017/mydatabase
PORT=4000

Make sure to replace mydatabase with your actual MongoDB database name.
3. Frontend Setup (Angular)

Go to the Angular client folder:

bash

cd ../client

Install the frontend dependencies:

bash

npm install

4. Start MongoDB

If you're running MongoDB locally, make sure it's running before you start the project. Use the following command:

bash

mongod --dbpath /path-to-your-mongodb-data-directory

If you are using MongoDB Atlas, ensure your MONGODB_URI in the .env file is correctly set up with your Atlas connection string.
5. Running the Backend (GraphQL API)

Start the Node.js backend server:

bash

cd ../backend
npm start

The backend will be running on http://localhost:4000 by default.
6. Building and Running the Angular Frontend

To build the Angular frontend, navigate to the Angular project folder:

bash

cd ../client
ng build --prod

Once the build completes, run the Angular development server:

bash

ng serve --open

The frontend will be running at http://localhost:4200.
