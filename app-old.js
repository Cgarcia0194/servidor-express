const http = require('http');

const server = http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'application/JSON'});

    res.write('hola mundo');

    res.end();
});

server.listen(3000);

console.log('escuchando puerto', 3000);