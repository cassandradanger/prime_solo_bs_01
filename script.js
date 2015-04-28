var apikey = 'ba7280b6a052562af59a3776f9607c43984e6b6a';


// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
	for(var i = 0; i < 9; i++){
		var name = results[i].name;
		var image = results[i].image.icon_url;
		var deck = results[i].deck;
		if(i % 3 == 0){
			var count = i;
			$(".container").append("<div class = 'row row" + count + "'></div>");
		};
		$(".row" + count).append("<div class = 'main col-md-4 well'><p class = 'lead'>" + name + "</p><div class = 'hidden-sm hidden-xs'><img src = '" + image + "'></div><button class ='btnRemove btn-sm btn-success'>remove</button><p>" + deck + "</p></div>");
		$(".row" + count).hide().fadeIn();

	}
    console.log(results);
}

$(document).ready(function() {
	count = 0
	search('batman');
	$(".container").on("click", ".btnRemove", function(){ 
		count++;
		$(this).parent().fadeOut(".main");
	});

});



// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}
