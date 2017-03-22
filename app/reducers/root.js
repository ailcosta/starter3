import { combineReducers } from 'redux';
import {ADD_RECIPE, ADD_INGREDIENT, SET_RECIPES} from '../constants/action.types';

const recipesReducer = (recipes, action) => {

	if (recipes) {
		switch (action.type) {
			case ADD_RECIPE:
				return recipes.concat({name: action.name});
			case SET_RECIPES:
				return action.payload.recipes;
			default:
				return recipes;
		}
	}
	else {
		return [];
	}
};

const ingredientsReducer = (ingredients, action) => {
	if (ingredients) {
		switch (action.type) {
			case ADD_INGREDIENT:
				const newIngredient = {
					recipe_id: action.recipe_id,
					name: action.name,
					quantity: action.quantity
				};
				return ingredients.concat(newIngredient);
			default:
				return ingredients;
		}
	} else {
		return [];
	}

};


const rootReducer =  combineReducers({
	recipes: recipesReducer,
	ingredients: ingredientsReducer
});

export default rootReducer;





/*
const rootReducer = (state, action) => {
	return Object.assign({}, state, {
		recipes: recipesReducer(state.recipes, action),
		ingredients: ingredientsReducer(state.ingredients, action)
	});
};
*/