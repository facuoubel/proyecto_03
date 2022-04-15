import http from "http";

const server = http.createServer((req,res) => {

	const { url, method } = req;

	if ( url  === '/' && method === 'GET' ) {

		res.end(JSON.stringify('Hola mundo'));
	}

});

server.listen(8080);
