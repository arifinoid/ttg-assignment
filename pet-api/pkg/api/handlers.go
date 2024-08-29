package api

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/arifinoid/ttg-assignment/pet-api/pkg/db/models"
	"github.com/go-chi/chi/v5"
	"github.com/go-pg/pg/v10"
)

type PetsResponse struct {
	Success bool         `json:"success"`
	Error   string       `json:"error"`
	Pets    []models.Pet `json:"pets"`
}

type PetResponse struct {
	Success bool       `json:"success"`
	Error   string     `json:"error"`
	Pet     models.Pet `json:"pet"`
}

type MutatePetRequest struct {
	Name string `json:"name"`
	Type string `json:"type"`
}

func GetPets(w http.ResponseWriter, r *http.Request) {
	pgdb, ok := r.Context().Value("DB").(*pg.DB)

	if !ok {
		handleDBFromContextErr(w)
		return
	}

	pets, err := models.GetPets(pgdb)
	if err != nil {
		handleErr(w, err)
		return
	}
	res := &PetsResponse{
		Success: true,
		Error:   "",
		Pets:    pets,
	}
	err = json.NewEncoder(w).Encode(res)
	if err != nil {
		log.Printf("error encoding pets: %v\n", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func GetPetByID(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	petId, err := strconv.Atoi(id)
	if err != nil {
		handleErr(w, err)
		return
	}

	pgdb, ok := r.Context().Value("DB").(*pg.DB)
	if !ok {
		handleDBFromContextErr(w)
		return
	}

	pet, err := models.GetPetByID(pgdb, petId)
	if err != nil {
		handleErr(w, err)
		return
	}

	res := &PetResponse{
		Success: true,
		Error:   "",
		Pet:     *pet,
	}
	err = json.NewEncoder(w).Encode(res)
	if err != nil {
		log.Printf("error encoding comments: %v\n", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func CreatePet(w http.ResponseWriter, r *http.Request) {
	req := &MutatePetRequest{}
	err := json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		handleErr(w, err)
		return
	}

	pgdb, ok := r.Context().Value("DB").(*pg.DB)
	if !ok {
		handleDBFromContextErr(w)
		return
	}

	pet, err := models.CreatePet(pgdb, &models.Pet{
		Name: req.Name,
		Type: req.Type,
	})
	if err != nil {
		handleErr(w, err)
		return
	}

	res := &PetsResponse{
		Success: true,
		Error:   "",
		Pets:    []models.Pet{*pet},
	}
	err = json.NewEncoder(w).Encode(res)
	if err != nil {
		log.Printf("error encoding after creating pets %v\n", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func UpdatePetByID(w http.ResponseWriter, r *http.Request) {
	req := &MutatePetRequest{}
	err := json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		handleErr(w, err)
		return
	}
	pgdb, ok := r.Context().Value("DB").(*pg.DB)
	if !ok {
		handleDBFromContextErr(w)
		return
	}

	id := chi.URLParam(r, "id")
	petId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		handleErr(w, err)
		return
	}

	pet, err := models.UpdatePet(pgdb, &models.Pet{
		ID:   petId,
		Name: req.Name,
		Type: req.Type,
	})
	if err != nil {
		handleErr(w, err)
	}
	handleOk(pet, w)
}

func DeletePetByID(w http.ResponseWriter, r *http.Request) {
	pgdb, ok := r.Context().Value("DB").(*pg.DB)
	if !ok {
		handleDBFromContextErr(w)
		return
	}

	id := chi.URLParam(r, "id")
	petId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		handleErr(w, err)
		return
	}

	err = models.DeletePet(pgdb, petId)
	if err != nil {
		handleErr(w, err)
		return
	}

	handleOk(nil, w)
}

func handleErr(w http.ResponseWriter, err error) {
	res := &PetsResponse{
		Success: false,
		Error:   err.Error(),
		Pets:    nil,
	}
	err = json.NewEncoder(w).Encode(res)
	if err != nil {
		log.Printf("error sending response %v\n", err)
	}
	w.WriteHeader(http.StatusBadRequest)
}

func handleDBFromContextErr(w http.ResponseWriter) {
	res := &PetsResponse{
		Success: false,
		Error:   "could not get the DB from context",
		Pets:    nil,
	}
	err := json.NewEncoder(w).Encode(res)
	if err != nil {
		log.Printf("error sending response %v\n", err)
	}
	w.WriteHeader(http.StatusBadRequest)
}

func handleOk(pet *models.Pet, w http.ResponseWriter) {
	res := &PetResponse{
		Success: true,
		Error:   "",
		Pet:     *pet,
	}
	err := json.NewEncoder(w).Encode(res)
	if err != nil {
		log.Printf("error encoding pet: %v\n", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)
}
