
import { createStore } from 'redux';

import rootReducer from '../reducers/root';


const initialState = {
	recipes: [
	   {
	      id: 10,
	      name: 'omelette'
	   }
	],
	ingredients: [
	   {
	       recipe_id: 10,
	       name: 'eggs',
	       quantity: 2
	    },
	    {
	       recipe_id: 10,
	       name: 'milk',
	       quantity: 1
	    }
	 ]
 };


const store = createStore(rootReducer, initialState);
export default store;