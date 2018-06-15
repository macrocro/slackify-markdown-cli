#!/usr/bin/env node

const slackifyMarkdown = require('slackify-markdown');
const args = process.argv.slice(2)[0];
const fs = require('fs');

fs.readFile(args, 'utf8', function (err, text) {
	console.log(slackifyMarkdown(text));
});
