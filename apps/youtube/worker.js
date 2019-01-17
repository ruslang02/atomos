let fs = require('fs');
let google;
let OAuth2Client;
let youtubedl;
try {
	google = require('googleapis').google;
	OAuth2Client = require('google-auth-library').OAuth2Client;
	youtubedl = require('youtube-dl');
} catch (e) {
	postMessage({
		action: "library-error"
	});
	close();
}
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
			google.people('v1').people.get({
				auth: oauth2Client,
				resourceName: "people/me",
				personFields: "names,photos"
			}, (e, result) => {
				if (e) {
					console.error(e);
					postMessage({
						action: "logged-in",
						user: {
							displayName: "Error loading user profile",
							avatarURL: "about:blank"
						}
					});
					return;
				}
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
		case "get-channels":
			let subChannels = [];
			let iChannels = 0;
			let totalChannels = 0;

		async function retrieveChannels() {
			let res = await new Promise(resolve => google.youtube('v3').subscriptions.list({
				auth: oauth2Client,
				part: 'snippet',
				mine: true,
				maxResults: 50
			}, (e, res) => resolve(res)));
			try {
				totalChannels = res.data.pageInfo.totalResults;
			} catch (e) {
			}
			if (totalChannels < iChannels * 50) return subChannels;
			subChannels.push.apply(subChannels, res.data.items);
			iChannels++;
			return await retrieveChannels();
		}

			retrieveChannels().then(channels => postMessage({action: "get-channels", items: channels}));
			break;
		case "get-channel-info":
			google.youtube('v3').channels.list({
				auth: oauth2Client,
				part: 'snippet,brandingSettings,statistics',
				id: e.data.id,
				maxResults: 1
			}, (e, res) => {
				if (e) console.error(e);
				postMessage({action: "get-channel-info", info: res.data.items[0]})
			});
			break;
		case "get-channel-videos":
			google.youtube('v3').search.list({
				auth: oauth2Client,
				part: 'snippet',
				channelId: e.data.id,
				maxResults: 50
			}, (e, res) => {
				if (e) console.error(e);
				postMessage({action: "get-channel-videos", items: res.data.items})
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
			break;
		case "search":
			google.youtube('v3').search.list({
				auth: oauth2Client,
				part: "snippet",
				q: e.data.q,
				type: "video",
				order: "relevance",
				videoEmbeddable: true,
				maxResults: 20
			}, function (e, res) {
				if (e) throw e;
				postMessage({action: "search", items: res.data.items});
			});
			break;
		case "list-subscriptions":
			let subVideos = [];

		function retrieveVideo(channelId) {
			return new Promise(resolve => google.youtube('v3').search.list({
				auth: oauth2Client,
				part: "snippet",
				channelId: channelId,
				type: "video",
				order: "date",
				videoEmbeddable: true,
				maxResults: 5
			}, (e, res) => resolve(subVideos.push.apply(subVideos, res.data.items))));
		}

		async function retrieveVideos() {
			/*for (const channel of await retrieveChannels()) {
				console.log(channel);
				await retrieveVideo(channel.snippet.resourceId.channelId);
			}
			console.log(subVideos)
			subVideos = subVideos.sort(function (a, b) {
				return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
			});
			subVideos.length = 20;*/
			return await new Promise(resolve => google.youtube('v3').activities.list({
				auth: oauth2Client,
				part: "snippet, contentDetails",
				home: true,
				maxResults: 25
			}, (e, res) => resolve(res.data)));
		}

			retrieveVideos().then(videos => postMessage({action: "list-subscriptions", result: videos}));

			break;
		case "play-video":
			let url = 'https://www.youtube.com/watch?v=' + e.data.id;
			youtubedl.getInfo(url, [], function (err, info) {
				if (err) throw err;
				postMessage({action: "play-video", result: info});
			});
	}
};