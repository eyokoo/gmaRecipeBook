const connection = require("../sql/connection");

//GET list all recipes found in database
let allRecipes = (req, res) => {
  console.log("Inside the GET list all recipes function",req.params);
  connection.query("SELECT * FROM recipes", (error, rows) => {
    if (error) {
      console.log("Failed to list recipes", error);
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  })
}

//GET get recipes by ingredient name //have to do two joins
let recipesByIng = (req, res) => {
  console.log("Inside the GET recipes by ingredient function",req.params.name);
  let id = req.params.name
  let sql = "SELECT id, recipe_name FROM recipes WHERE ingredient_name=?" //sql command to send to the database
  let params = [id];
  
  connection.query(sql, params, (error, rows) => {//make a connection to send the query
    console.log("This is what's inside ROWS:", rows)
    if (error) {
      console.error("Failed to query the db", error);// if we get an error from the db
      res.sendStatus(500);
    } else if (!rows || rows.length == 0) {    // if we get no rows from the database
      res.sendStatus(404);
    } else {
      res.send(rows[0]);
    }
  })
}

//GET/:id  get recipe by id
let recipeById = (req, res) => {
  console.log("Inside the GET recipe by ID function", req.params.id);
  let id = req.params.id
  let sql = "SELECT id, recipe_name FROM recipes WHERE id =?" //sql command to send to the database
  let params = [id];
  
  connection.query(sql, params, (error, rows) => {//make a connection to send the query
    console.log("This is what's inside ROWS:", rows)
    if (error) {
      console.error("Failed to query the db", error);// if we get an error from the db
      res.sendStatus(500);
    } else if (!rows || rows.length == 0) {    // if we get no rows from the database
      res.sendStatus(404);
    } else {
      res.send(rows[0]);
    }
  })
}


//PUT/:id  edit the recipe by id
let editRecipe = (req, res) => {
  console.log("Inside the edit recipe function", req.params.id);
  let id = req.params.id
  let updName= req.body.name
  let updInstr = req.body.instructions
  let sql = "UPDATE recipes SET recipe_name=?, recipe_instructions=? WHERE id=?" 
  let params = [updName,updInstr,id]
  
  connection.query(sql,params,(error) => {
    if (error){
      console.log("Failed to update item", error);
      res.sendStatus(500);
    }else {
      res.send("Success - Recipe updated!");
    }
  })
}

//POST add a recipe
let addRecipe = (req, res) => {
  console.log("Inside the add recipe function", req.body);
  let newName = req.body.name
  let newInstr = req.body.instructions
  let sql = `INSERT INTO recipes (recipe_name, recipe_instructions) VALUES (?, ?);`
  let params = [newName, newInstr];

    connection.query(sql, params, (error) => {
      if (error) {
        console.error("Failed to insert new recipe in the database", error);
        res.sendStatus(500);
      } else {
        res.send("Success - You created a new recipe!");
      }
    })
}


//DELETE a recipe by id
let deleteRecipe = (req, res) => {
  console.log("Inside the delete function", req.params.id)
  let id = req.params.id
  let sql = "DELETE FROM recipes WHERE id = ?"
  let params = [id];

    connection.query(sql, params, (error) => {
      if (error) {
        console.error("Failed to delete recipe in the database", error);
        res.sendStatus(500);
      } else {
        res.send("Success - You deleted an recipe!");
      }
    })
}


module.exports = { allRecipes, recipesByIng,recipeById, editRecipe, addRecipe, deleteRecipe};