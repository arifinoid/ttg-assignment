package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/arifinoid/ttg-assignment/pet-api/pkg/api"
	"github.com/arifinoid/ttg-assignment/pet-api/pkg/db"
)

func main() {
	pgdb, err := db.StartDB()
	if err != nil {
		log.Printf("error starting the database %v", err)
	}

	router := api.StartAPI(pgdb)
	port := os.Getenv("PORT")
	err = http.ListenAndServe(fmt.Sprintf(":%s", port), router)
	if err != nil {
		log.Printf("error from router %v\n", err)
	}
}
