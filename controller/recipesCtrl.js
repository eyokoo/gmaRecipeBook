const connection = require("../sql/connection");

//GET list all recipes found in database
let allRecipes = (req, res) => {
  console.log("Inside the GET list all recipes function",req.params);
  res.send("success")
}

//GET get recipes by ingredient
let recipesByIng = (req, res) => {
  console.log("Inside the GET recipes by ingredient function",req.params);
  res.send("success")
}

//GET/:id  get recipe by id
let recipeById = (req, res) => {
  console.log("Inside the GET recipe by ID function", req.params.id);
  res.send("success")
}


//PUT/:id  edit the recipe by id
let editRecipe = (req, res) => {
  console.log("Inside the edit recipe function", req.params.id);
  res.send("success")
}

//POST add a recipe
let addRecipe = (req, res) => {
  console.log("Inside the add recipe function", req.body);
  res.send("success")
}


//DELETE a recipe by id
let deleteRecipe = (req, res) => {
  console.log("Inside the delete function", req.body)
  res.send("success")
}


module.exports = { allRecipes, recipesByIng,recipeById, editRecipe, addRecipe, deleteRecipe};