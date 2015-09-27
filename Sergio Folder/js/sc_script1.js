$(document).ready(function() {

console.log("Hello World");

	SC.initialize({
		client_id: "c168506a56266931b133ea651be2d1db"
		//redirect_uri: "http://example.com/callback"
	});

  SC.get('/tracks', { genres: 'metal' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre + ' - ').append($('<img src="'+track.artwork_url+'"/>')));
    });
  });

  $("#loadTracks").live("click", function(){
    SC.get("/tracks", {limit: 1}, function(tracks){
      var track = tracks[0];
      SC.oEmbed(track.uri, document.getElementById("track"));
    });
  });

});