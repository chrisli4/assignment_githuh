#!/usr/bin/env node

const request = require('request');
const program = require('commander');
const GitHuh = require('./githuh');

program
	.version('0.1.0')
	.command('repos <username>')
	.action((username) => {
		let user = new GitHuh(username);
		user.repos((data) => {
			console.log(`GIT REPOSITORIES FOR: ${username}`);
			console.log(`----------------------------------`);
			data.forEach((repo) => {
				console.log(repo.name);
			});
		});
	});

program
	.command('stars <username>')
	.action((username) => {
		let user = new GitHuh(username);
		console.log(`STARRED REPOSITORIES FOR: ${username}`);
		console.log(`----------------------------------`);
		user.starred((data) => {
			data.forEach((repo) => {
				console.log(repo.name);
			});
		});
	});

program
	.command('profile <username>')
	.action((username) => {
		let user = new GitHuh(username);
		console.log(`PROFILE FOR: ${username}`);
		console.log(`----------------------------------`);
		user.profile((data) => {
			console.log(`NAME: ${data.name}`);
			console.log(`EMAIL: ${data.email}`);
			console.log(`PUBLIC REPOS: ${data.public_repos}`);
			console.log(`FOLLOWERS: ${data.followers}`);
		});
	});

program.parse(process.argv);
