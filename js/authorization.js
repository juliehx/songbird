const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientID = 'c180770a2f4144078103e268866ea767';
const redirectURI = 'https://juliehx.github.io/songbird/callback';
	
window.location.replace(`${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token`);