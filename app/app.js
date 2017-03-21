import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';

import store from './store/store';

import {addRecipe} from './actions/actions.creators';

import {addIngredient} from './actions/actions.creators';

console.log("Redux started");
console.log(addIngredient);

store.dispatch(addRecipe('Macarrão'));
store.dispatch(addIngredient('Macarrão', 'Eggs', 3));

console.log("after addIngredient");

window.store = store;
