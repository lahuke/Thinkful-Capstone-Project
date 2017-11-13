
var edamamURL = 'https://api.edamam.com/search';
//defines function that allows people to click
//on the favorites button to view saved favorites
function viewFavorites() {
	$('.favoriteButton').click(function(event){
		$('.js-search-form').hide();
		$('.js-results').hide();
		$('.favoriteHeader').show();
	});
}

//calls viewFavorites function
viewFavorites();

function getData (searchTerm, callback) {
	var query = {
		q: searchTerm,
		app_id: '1ceae5b9',
		app_key: '7cf93f8ce87c8dd107cc40f76b41b6de	—'
		from: 0,
		to: 20
	}
	$.getJSON(edamamURL, query, callback);
}

//TO DO
//Add to favorites 
