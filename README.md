Express Project
A simple REST API built with Express.js for managing friend data.

Overview
This project demonstrates a basic Express.js application that provides API endpoints for managing a collection of friends. It showcases fundamental Express concepts including routing, middleware, and JSON response handling.

Features
RESTful API endpoints for friend data
JSON response formatting
Simple routing architecture
Error handling
Installation
Clone the repository:

Install dependencies:

Start the server: $ node server

The server will run on http://localhost:3000 by default.

API Endpoints
Method	Endpoint	Description
GET	/friends	Retrieve all friends
GET	/friends/:id	Retrieve a specific friend by ID
POST	/friends	Create a new friend
PUT	/friends/:id	Update a friend by ID
DELETE	/friends/:id	Delete a friend by ID
Example Usage
Get all friends
Response:

Create a new friend
Project Structure
Technologies Used
Node.js
Express.js
JavaScript
Dependencies
express: ^4.18.2
body-parser: ^1.20.2
Development Dependencies
nodemon: ^3.0.1
License
MIT - Dan Kiss 2025