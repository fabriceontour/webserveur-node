const hbs = require('hbs');

//Helpers. Dans le hbs, il va voir les parametres du render. Si rien, il cherche les Helpers
hbs.registerHelper('getAno', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
  let palabras = texto.split(' ');
  palabras.forEach((palabra, index) => {
    palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    return palabras.join(' ');
  });
})
