var edamamURL = 'https://api.edamam.com/search';
//var recipePuppyURL = 'http://www.recipepuppy.com/api/'

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
var resultTemplate = (
	'<div class="recipeResults">' + '<ul>' +
	'<li><a class="recipeName0" href="" target="_blank"></a></li>' + 
	'<li><a class="recipeName1" href="" target="_blank"></a></li>' + 
	'<li><a class="recipeName2" href="" target="_blank"></a></li>' + 
	'<li><a class="recipeName3" href="" target="_blank"></a></li>' + 
	'<li><a class="recipeName4" href="" target="_blank"></a></li>' + 
//	'<a class=thumbnailLink" href="" target="_blank"><img class="thumbnails" src=""></img></a>' + 
//	'<button class="addToFavorites">Favorite</button>' + 
'</ul' +
'</div>'
);

function getData (searchTerm, callback) {
	var query = {
		q: searchTerm,
		//p: 1,
		app_id: '1ceae5b9',
		app_key: '7cf93f8ce87c8dd107cc40f76b41b6de',
		from: 0,
		to: 5
	}
	$.getJSON(edamamURL, query, callback)
}


function renderResults(result){
	var template = $(resultTemplate);
		template.find(".recipeName0").html(result.hits[0].recipe.label).attr('href', result.hits[0].recipe.url)
		template.find(".recipeName1").html(result.hits[1].recipe.label).attr('href', result.hits[0].recipe.url) 
		template.find(".recipeName2").html(result.hits[2].recipe.label).attr('href', result.hits[0].recipe.url) 
		template.find(".recipeName3").html(result.hits[3].recipe.label).attr('href', result.hits[0].recipe.url) 
		template.find(".recipeName4").html(result.hits[4].recipe.label).attr('href', result.hits[0].recipe.url) 
		$('.js-results').html(template);		
}

//function displayData(data){
//	var results = data.item.map(function(item, index){
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
		 	getData(ingredient, renderResults);
		 }
//Clears form after search
		 $('.js-query').val('');
	});
}
searchRecipes();






//TO DO
//Add to favorites 
