# Notes App API Backend

This is a simple RESTful API for a notes application. It is built with Node.js and Express.js, focusing on a robust backend with secure user authentication and efficient CRUD operations.

## Features

-   **Secure User Authentication:** Implemented with JWT (JSON Web Tokens) to protect user data.
-   **CRUD Operations:** Full functionality to Create, Read, Update, and Delete notes.
-   **Protected Routes:** Only authenticated users can access and manage their notes.
-   **Simple Database:** Uses SQLite for data storage, managed with a clear schema.

## Technology Stack

* **Backend:** Node.js, Express.js
* **Database:** SQLite
* **Authentication:** JSON Web Tokens (JWT)

## Installation

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/aglucazgeorgeann-ship-it/notes-app-api-backend.git](https://github.com/aglucazgeorgeann-ship-it/notes-app-api-backend.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd notes-app-api-backend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the server:**
    ```bash
    npm start
    ```

## API Endpoints

The API provides the following endpoints:

### User Authentication

* `POST /api/auth/register` - Register a new user.
* `POST /api/auth/login` - Authenticate a user and get a JWT.

### Notes

* `GET /api/notes` - Get all notes for the authenticated user.
* `POST /api/notes` - Create a new note.
* `GET /api/notes/:id` - Get a specific note by ID.
* `PUT /api/notes/:id` - Update a specific note by ID.
* `DELETE /api/notes/:id` - Delete a specific note by ID.