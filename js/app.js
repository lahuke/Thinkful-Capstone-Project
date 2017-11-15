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
		 }
//Clears form after search
		 $('.js-query').val('');
	});
}
searchRecipes();

var resultTemplate = (
	'<div>' + '<a class="recipeName" href=""></a>' + '<a class=thumbnailLink" href="" target="_blank"><img class="thumbnails" src=""></img></a>' + '</div'
);

function renderResults(result) {
	var template = $(resultTemplate);
	template.find(".recipeName").html(result.hits.recipe.label).attr('src', result.hits.recipe.url)
	template.find(".thumbnailLink").attr('href', result.hits.recipe.url)
	template.find(".thumbnails").attr('src', result.hits.recipe.image)
	return template;
}


//function getData (searchTerm, callback) {
//	var query = {
	//	q: searchTerm,
	//	app_id: '1ceae5b9',
	//	app_key: '7cf93f8ce87c8dd107cc40f76b41b6de'
	//	from: 0,
	//	to: 20
//	}
//	$.getJSON(edamamURL, query, callback);
//}

//TO DO
//Add to favorites 
