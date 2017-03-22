import $ from 'jquery';
import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';

import store from './store/store';
import loadUI from './ui/index';

import {addRecipe} from './actions/actions.creators';
import {fetchRecipes} from './actions/actions.creators';
import {addIngredient} from './actions/actions.creators';

/*
store.dispatch(addRecipe('Macarrão'));
store.dispatch(addIngredient('Macarrão', 'Eggs', 3));
*/
store.dispatch(fetchRecipes());

$(loadUI);

window.store = store;
window.addRecipe = addRecipe;
