import {ADD_RECIPE, 
	    SET_RECIPES, 
	    FETCH_RECIPES,
	    ADD_INGREDIENT,
	    SET_INGREDIENT,
	    FETCH_INGREDIENT
	} from '../constants/action.types';

const addRecipe = (name) => ({
  type: ADD_RECIPE,
  name
});


const setRecipes = (data) => ({
  type: SET_RECIPES,
  payload: data
});

const fetchRecipes = () => ({
  type: FETCH_RECIPES
});


const addIngredient = (recipe_id, name, quantity) => ({
      type: ADD_INGREDIENT, recipe_id, name, quantity
   });

export {addIngredient,addRecipe, setRecipes, fetchRecipes};