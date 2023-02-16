# Budient

Budient's API allows managing expenses and revenues for a given user. It uses a RESTful architecture and is secured with JSON Web Token (JWT) for authentication.

## Table of Conten

- [Features](#features)
- [Routes](#routes)
  - [Users](#users)
  - [Authentication](#authentication)
  - [Transactions](#transactions)
  - [Connection history](#connection-history)
- [Technologies used](#technologies-used)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Author](#author)

## Features

- Creating, reading, updating, and deleting users
- Authenticating a user with JWT to access protected routes
- Adding, reading, updating, and deleting transactions for a given user
- Viewing connection history for a user

## Routes

### Users

- POST `/api/users`: create a new user with a name, last name, date of birth, email address, and password
- GET `/api/users/:id`: get information for a user based on their identifier
- PUT `/api/users/:id`: update user information based on their identifier
- DELETE `/api/users/:id`: delete a user based on their identifier

### Authentication

- POST `/api/auth`: authenticate a user with their email address and password, and return a JWT

### Transactions

- POST `/api/transactions`: add a new transaction for a user
- GET `/api/transactions/:id`: get information for a transaction based on its identifier
- PUT `/api/transactions/:id`: update transaction information based on its identifier
- DELETE `/api/transactions/:id`: delete a transaction based on its identifier
- GET `/api/transactions?from=:date&to=:date`: get all transactions for a user between two given dates

### Connection history

- GET `/api/connection-history`: get connection history for the currently connected user

## Technologies used

- Node.js for the server
- Typescript for static typing
- Express.js for the web framework
- MongoDB for the database
- Mongoose for the ODM
- JSON Web Token (JWT) for authentication

## Dependencies

```json
// package.json
"dependencies": {
    "bcrypt": "^5.1.0",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.9.1"
}
```

## Installation

1.  Clone the repository: `git clone https://github.com/aBgAmeuR/Budient.git`
2.  Install dependencies: `npm install`
3.  Create a `.env` file at the root of the project, based on the `.env.example` file.
4.  Start the server: `npm run dev`

## Author

- Name: Antoine JOSSET

Feel free to add additional information or adapt the description to your needs and API.
