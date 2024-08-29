package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-pg/pg/v10"
)

func StartAPI(pgdb *pg.DB) *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger, middleware.WithValue("DB", pgdb))

	r.Route("/pets", func(r chi.Router) {
		r.Get("/", GetPets)
		r.Get("/{id}", GetPetByID)
		r.Post("/", CreatePet)
	})

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	return r
}
