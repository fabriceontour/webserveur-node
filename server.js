//Cela utilise la librairie moderne Express. 
//Importe le paquet Express puis creer une variable app qui va etre le produit express
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials( __dirname + '/views/parciales');
//Pour utiliser hbs. Pour faire des pages dynamiques, comme PHP
app.set('view engine', 'hbs');

// Cela cree une route. Il y a toujours la requete et la reponse
app.get('/', (req, res) => {
  //Cela renvoie en sortie.
  //res.send(salida);
  // Le render pointe sur le repertoire views. 
  res.render('home', {
    nombre: 'fabrice maigne'
  });
})

app.get('/about', (req, res) => {
  res.render('about');
})
 
app.listen(port, () => {
    console.log('Escuchando peticiones');
})