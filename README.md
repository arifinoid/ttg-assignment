# Repository Documentation

This project is a set of TTG Assesment.

## Prerequisites

Make sure you have the following installed:

- Node.js version 18 or higher
- NPM or Yarn or pnpm (preferred)
- Go version 1.19 or higher
- Docker
- Docker Compose
- curl (optional, for testing API endpoints)

## Setup Guide

### Website Development & Vanilla Stopwatch

1. Change directory to `website-development` or `vanilla-stopwatch`
2. run `pnpm install` to install dependencies
3. run `pnpm dev` to start the development server
4. open http://localhost:3000 or http://127.0.0.1:3000 in your browser

### Base Logic

1. Change directory to `base-logic`
2. run `pnpm install` to install dependencies
3. run `pnpm gen-even` to execute the `generateEvenNumbers` script
4. run `pnpm create-stars` to execute the `createStarsPattern` script

### Pet API

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
   "species": "Dog",
   "age": 4
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
   "species": "Cat",
   "age": 3
   }'

   ```

4. Delete a pet
   URL: /pets/{id}
   Method: DELETE
   Description: Remove a pet from the database by its ID.
   ```bash
   curl -X DELETE localhost:8080/pets/1
   ```
