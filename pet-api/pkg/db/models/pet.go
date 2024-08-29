package models

import "github.com/go-pg/pg/v10"

type Pet struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
}

func CreatePet(db *pg.DB, req *Pet) (*Pet, error) {
	_, err := db.Model(req).Insert()
	if err != nil {
		return nil, err
	}

	pet := &Pet{}
	err = db.Model(pet).Where("pet.id = ?", req.ID).Select()
	if err != nil {
		return nil, err
	}

	return pet, nil
}

func GetPets(db *pg.DB) ([]Pet, error) {
	pets := []Pet{}
	err := db.Model(&pets).Select()
	if err != nil {
		return nil, err
	}
	return pets, nil
}

func GetPetByID(db *pg.DB, id int) (*Pet, error) {
	pet := &Pet{}
	err := db.Model(pet).Where("pet.id = ?", id).Select()
	if err != nil {
		return nil, err
	}

	return pet, nil
}

func UpdatePet(db *pg.DB, req *Pet) (*Pet, error) {
	_, err := db.Model(req).
		WherePK().
		Update()
	if err != nil {
		return nil, err
	}

	pet := &Pet{}

	err = db.Model(pet).
		Where("pet.id = ?", req.ID).
		Select()

	return pet, err
}

func DeletePet(db *pg.DB, petID int64) error {
	pet := &Pet{}

	err := db.Model(pet).
		Where("pet.id = ?", petID).
		Select()
	if err != nil {
		return err
	}

	_, err = db.Model(pet).WherePK().Delete()

	return err
}
