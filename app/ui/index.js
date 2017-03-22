import $ from 'jquery';
import store from 'store/store';
import { addRecipe } from '../actions/actions.creators';

function updateUI() {
	//const { recipes } = store.getState().recipes;
	const recipes = store.getState().recipes;
	const renderRecipe = (recipe) => `<li>${ recipe.name }</li>`;

	$('.recipes > ul').html(recipes.map(renderRecipe));
}
function handleAdd() {
	const $recipeName = $('.recipes > input');

	store.dispatch(addRecipe($recipeName.val()));

	$recipeName.val('');
}

function loadUI() {


	$('#app').append(`
		<div class="recipes">
		<h2>Recipes:</h2>
		<ul></ul>
		<input type="text" />
		<button>Add</button>
		</div>
	`);
	store.subscribe(updateUI);
	
	$(document).on('click', '.recipes > button', handleAdd);

	updateUI();
}

export default loadUI;