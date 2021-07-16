const express = require("express");
const router = express.Router(); //getting the router from express
const controller = require("../controller/recipesCtrl.js"); //whatever is being exported from the controller file path is being put into the variable controller


const checkJwt = require("../auth").checkJwt
const isAdmin = require("../auth").isAdmin

router.get("/recipes", [checkJwt], controller.allRecipes); // GET returns the list of recipes in my database
router.get("/recipes/ingredient", [checkJwt], controller.recipesByIng);//GET returns the list of recipes by ingredient
router.get("/recipes/:id", [checkJwt], controller.recipeById);// GET returns the recipe by id in my database

router.put("/recipes/:id",[checkJwt, isAdmin], controller.editRecipe);//PUT should call the editRecipe function, and update the recipe in my database

router.post("/recipes", [checkJwt, isAdmin],controller.addRecipe);//POST should call the addRecipe function, and add a recipe to my databse
// router.post("/ingredients", [checkJwt, isAdmin],controller.addIngredients);
// figure out how to add many ingredients at once

router.delete("/recipes/:id", [checkJwt, isAdmin], controller.deleteRecipe);// DELETE should call the deleteRecipe function, and delete the recipe from my database


module.exports = router; //need to expot this router so that is becomes available to the rest of your code
//what im exporting here is what i am importing in my recipes.js file -->app.use(require("./routes/recipes"));