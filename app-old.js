const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'Application/json' });

        let salida = {
            nombre: 'Alfonso',
            edad: 43,
            url: res.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');