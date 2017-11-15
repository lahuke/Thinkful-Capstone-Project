var edamamURL = 'https://api.edamam.com/search';

//views favorites
function viewFavorites() {
	$('.favoriteButton').click(function(event){
		$('.js-search-form').hide();
		$('.js-results').hide();
		$('.js-favorite-list').show();
	});
}
viewFavorites();

//returns to search
function backToSearch(){
	$('.homeButton').click(function(event){
		$('.js-search-form').toggle();
		$('.js-results').toggle();
		$('.js-favorite-list').toggle();
	});
}
backToSearch();

//format for displayed results
//var resultTemplate = (
//	'<div>' + '<a class="recipeName" href=""></a>' + 
//	'<a class=thumbnailLink" href="" target="_blank"><img class="thumbnails" src=""></img></a>' + 
//	'<button class="addToFavorites">Favorite</button>' + '</div>'
//);

function getData (searchTerm, callback) {
	var query = {
		q: searchTerm,
		app_id: '1ceae5b9',
		app_key: '7cf93f8ce87c8dd107cc40f76b41b6de',
		from: 0,
		to: 1
	}
	$.getJSON(edamamURL, query, callback); 
}

//function renderResults(result){
//	console.log(result.hits.recipe.label);
//	$('.js-results').html(result.hits.recipe.label);
//}
//function displayData(data){
//	$('.js-results').html(data);
//}

//function renderResults(result) {
//	var template = $(resultTemplate);
//	template.find(".recipeName").html(result.recipe.label).attr('src', result.hits.recipe.url)
//	template.find(".thumbnailLink").attr('href', result.hits.recipe.url)
//	template.find(".thumbnails").attr('src', result.hits.recipe.image)
//	return template;
//}

//function displayData(data){
//	var results = data.items.map(function (item,index){
//		return renderResults(item);
//	});
//	$('.js-results').html(results);
//}

//Search form function. Alerts when no items are entered.
function searchRecipes (){
	$('.js-search-form').submit(function(event){
		console.log('Submit Button Clicked');
		event.preventDefault();
		var ingredient = $('.js-query').val();
		 if(ingredient === ''){
		 	alert("We hope your pantry isn't empty! Please enter an ingredient.")
		 }
		 else {
		 	console.log('You searched ' + ingredient);
		 	getData(ingredient, hits.recipe.label);
		 }
//Clears form after search
		 $('.js-query').val('');
	});
}
searchRecipes();






//TO DO
//Add to favorites 
