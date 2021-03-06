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


function addToFavoritesList(){
$('.js-results').on('click', 'button', function (event){
	$(this).html("Remove from Favorites")
	$(this).closest('li').clone().appendTo('.favoriteSaved')
	$(this).css('background-color', '#20B2AA').html("Added to Favorites")
		console.log("You favorited a recipe!");
})
};

function removeFromFavoritesList(){
	$('.js-favorite-list').on('click', 'button', function(event){
		$(this).closest('li').hide();
		console.log("Recipe removed from Favorites");
	})
};
removeFromFavoritesList();

//format for displayed results
var resultTemplate = (
	'<div class="recipeResults">' + '<ul class = recipeList>' +
	'<li>' + '<a class="recipeName0" href="" target="_blank"></a>' + '<br>' + 
	'<a class="thumbnailLink0" href="" target="_blank"><img class="thumbnail0" src=""></img></a>' + '<br>' + 
	'<button class="addToFavorites">Add to Favorites</button>' + '<br><br>' + '</li>' +
	'<li>' + '<a class="recipeName1" href="" target="_blank"></a>' + '<br>' +
	'<a class="thumbnailLink1" href="" target="_blank"><img class="thumbnail1" src=""></img></a>' + '<br>' + 
	'<button class="addToFavorites">Add to Favorites</button>' + '<br><br>' + '</li>' +
	'<li>' + '<a class="recipeName2" href="" target="_blank"></a>' + '<br>' +
	'<a class="thumbnailLink2" href="" target="_blank"><img class="thumbnail2" src=""></img></a>' + '<br>' + 
	'<button class="addToFavorites">Add to Favorites</button>' + '<br><br>' + '</li>' +
	'<li>' + '<a class="recipeName3" href="" target="_blank"></a>' + '<br>' +
	'<a class="thumbnailLink3" href="" target="_blank"><img class="thumbnail3" src=""></img></a>' + '<br>' + 
	'<button class="addToFavorites">Add to Favorites</button>' + '<br><br>' + '</li>' +
	'<li>' + '<a class="recipeName4" href="" target="_blank"></a>' + '<br>' +
	'<a class="thumbnailLink4" href="" target="_blank"><img class="thumbnail4" src=""></img></a>' + '<br>' + 
	'<button class="addToFavorites">Add to Favorites</button>' + '</li>' +
'</ul' +
'</div>'
);

function getData (searchTerm, callback) {
	var query = {
		q: searchTerm,
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
		template.find(".recipeName1").html(result.hits[1].recipe.label).attr('href', result.hits[1].recipe.url) 
		template.find(".recipeName2").html(result.hits[2].recipe.label).attr('href', result.hits[2].recipe.url) 
		template.find(".recipeName3").html(result.hits[3].recipe.label).attr('href', result.hits[3].recipe.url) 
		template.find(".recipeName4").html(result.hits[4].recipe.label).attr('href', result.hits[4].recipe.url)
		template.find(".thumbnailLink0").attr('href', result.hits[0].recipe.url)
		template.find(".thumbnail0").attr('src', result.hits[0].recipe.image)
		template.find(".thumbnailLink1").attr('href', result.hits[1].recipe.url)
		template.find(".thumbnail1").attr('src', result.hits[1].recipe.image)  
		template.find(".thumbnailLink2").attr('href', result.hits[2].recipe.url)
		template.find(".thumbnail2").attr('src', result.hits[2].recipe.image) 
		template.find(".thumbnailLink3").attr('href', result.hits[3].recipe.url)
		template.find(".thumbnail3").attr('src', result.hits[3].recipe.image) 
		template.find(".thumbnailLink4").attr('href', result.hits[4].recipe.url)
		template.find(".thumbnail4").attr('src', result.hits[4].recipe.image) 
		$('.js-results').html(template);	
	
}

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
addToFavoritesList();







