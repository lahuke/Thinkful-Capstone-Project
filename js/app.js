
function viewFavorites() {
	$('.favoriteButton').click(function(event){
		$('.js-search-form').hide();
		$('.js-results').hide();
		$('.favoriteHeader').show();
	});

}
viewFavorites();
//TO DO
//Add to favorites 
