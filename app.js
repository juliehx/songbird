const authEndpoint = 'https://accounts.spotify.com/api/token';
const clientID = 'c180770a2f4144078103e268866ea767';
const redirectURI = 'http://localhost:8888/callback';

function requestAuth(clientID) {
	const settings = {
		url: authEndpoint,
		data: {
			client_id: clientID,
			response_type: 'token',
			redirect_uri: redirectURI
		},
		type: 'POST',
		dataType: 'json',
		success: alert("success"),
		failure: alert("failure")
	}
	$.ajax(settings);
}

$('.album-accordion').on('click', '.album', function(event) {
	$(this).next('.tracklist').slideToggle();
});

$(requestAuth(clientID));