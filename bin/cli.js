#!/usr/bin/env node

const { parseArgs } = require('node:util');
const next = require('next');

const args = parseArgs({
	options: {
		port: {
			type: 'number',
			short: 'p',
		},
	},
});

const port = args.values.port || 8888;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
	require('http').createServer((req, res) => {
		handle(req, res);
	}).listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
