const request = require('request');
const baseUri = "https://api.github.com/users/";

const options = {
	url: '',
	headers: {
		'User-Agent': "chrisli41"
	}
};

class GitHuh {

	constructor(username) {
		this.username = username;
	}

	repos(callback) {
		this._sendRequest("/repos", callback);
	}

	starred(callback) {
		this._sendRequest("/starred", callback);
	}

	profile(callback) {
		this._sendRequest("", callback);
	}

	_sendRequest(type, callback) {
		const url = `${baseUri}${this.username}${type}`;
		options.url = url;
		request(options, (error, response, body) => {
			if(!error & response.statusCode === 200) {
				callback(JSON.parse(body));
			}
			else {
				console.log(`Error: ${error}`);
			}
		});
	}
}

module.exports = GitHuh;