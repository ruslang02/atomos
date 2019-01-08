let fs = require('fs');
let {google} = require('googleapis');
let {OAuth2Client} = require('google-auth-library');

let SCOPES = ['https://www.googleapis.com/auth/youtube.readonly', "https://www.googleapis.com/auth/userinfo.profile"];
let TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
	process.env.USERPROFILE) + '/.credentials/';
let TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';
let oauth2Client;
let clientSecret;
// Load client secrets from a local file.
fs.readFile(__dirname + '/client_secret.json', function processClientSecrets(err, content) {
	if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	}
// Authorize a client with the loaded credentials, then call the YouTube API.
	clientSecret = JSON.parse(content);
	authorize(clientSecret);
});

function authorize(credentials) {
	let clientSecret = credentials.web.client_secret;
	let clientId = credentials.web.client_id;
	let redirectUrl = "http://atomos.org.uk/ytcallback";
	oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, function (err, token) {
		if (err) {
			let authUrl = oauth2Client.generateAuthUrl({
				access_type: 'offline',
				scope: SCOPES
			});
			postMessage({action: "log-in", url: authUrl});
		} else {
			oauth2Client.credentials = JSON.parse(token);
			console.log(oauth2Client);
			google.people('v1').people.get({
				auth: oauth2Client,
				resourceName: "people/me",
				personFields: "names,photos"
			}, (e, result) => {
				if (e) {
					console.error(e);
					return;
				}
				console.log(result);
				postMessage({
					action: "logged-in",
					user: {
						displayName: result.data.names[0].displayName,
						avatarURL: result.data.photos[0].url
					}
				})

			});
		}
	});
}

async function storeToken(token) {
	try {
		fs.mkdirSync(TOKEN_DIR);
	} catch (err) {
		if (err.code !== 'EEXIST') {
			throw err;
		}
	}
	await fs.promises.writeFile(TOKEN_PATH, JSON.stringify(token));
	console.log('Token stored to ' + TOKEN_PATH);
}

onmessage = function (e) {
	let action = e.data.action;
	switch (action) {
		case "return-token":
			oauth2Client.getToken(e.data.token, function (err, token) {
				if (err) {
					console.log('Error while trying to retrieve access token', err);
					return;
				}
				oauth2Client.credentials = token;
				storeToken(token).then(e =>
					authorize(clientSecret));
			});
			break;
		case "log-out":
			fs.unlink(TOKEN_PATH, () => {
				postMessage({
					action: "logged-out"
				})
			});
			break;
		case "list-popular":
			google.youtube('v3').videos.list({
				auth: oauth2Client,
				part: 'snippet',
				chart: 'mostPopular',
				maxResults: 30
			}, function (e, res) {
				if (e) throw e;
				postMessage({action: "list-popular", items: res.data.items});
			});
	}
}