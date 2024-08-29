# Pet API Documentation

This project is a simple Pet API built using Go, PostgreSQL, and Docker. It provides CRUD (Create, Read, Update, Delete) operations for managing pet information.

## Prerequisites

Make sure you have the following installed:

- Go version 1.19 or higher
- Docker
- Docker Compose
- curl (optional, for testing API endpoints)

## Setup

1. Clone the repository
2. change directory to `pet-api`
3. run `docker compose up --build`, This command will build the Docker image, start the PostgreSQL database, and run the Go API server on localhost:8080

API Endpoints

1. Get all pets
   URL: /pets
   Method: GET
   Description: Fetch all pets from the database.

   ```bash
   curl -X GET localhost:8080/pets
   ```

2. Add a new pet
   URL: /pets
   Method: POST
   Description: Add a new pet to the database.
   Body: JSON object with pet details.

   ```bash
   curl -X POST localhost:8080/pets -H "Content-Type: application/json" -d '{
   "name": "Max",
   "type": "Dog",
   }'
   ```

3. Update a pet
   URL: /pets/{id}
   Method: PUT
   Description: Update an existing pet by its ID.
   Body: JSON object with updated pet details.

   ```bash
   curl -X PUT localhost:8080/pets/1 -H "Content-Type: application/json" -d '{
   "name": "Bella",
   "type": "Cat",
   }'

   ```

4. Delete a pet
   URL: /pets/{id}
   Method: DELETE
   Description: Remove a pet from the database by its ID.
   ```bash
   curl -X DELETE localhost:8080/pets/1
   ```
