// 'use strict'

const { createReadStream } = require('fs');
const { createServer } = require('http');
const server = createServer();


server.on('request', (req, res) => {
	console.log("request method", req.method);
	console.log("request url", req.url);
	console.log("request headers", req.headers);


	const readStream = createReadStream('index.html');
		readStream
		.on('error', (err) => {
			res.end(error);
		})
		.on('open', () => {
			readStream.pipe(res)
		});

});


server.listen(8080, () => {
	console.log("listening on 8080")
});
