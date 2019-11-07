
//On cree l'objet http. Le paquet est deja dans node-module
const http = require('http');

// Cela cree un serveur. Il faut dans la console, faire node app. Pour lancer le serveur
//Le console se voit dans la console et le serveur tourne.
// Dans localhost:8080, on voit une page web.
// req => La requete qui arrive
// res => C'es la réponse que on fait
// res.write imprime une page web. Il faut mettre res.end() pour finir la reponse


http.createServer( (req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el port');