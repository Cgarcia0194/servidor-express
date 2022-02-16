require('dotenv').config();//verifica el puerto, si no existe usa el puerto que se especifica en .env si no usa otro
const express = require('express')
const hbs = require('hbs');

const app = express();

const port = process.env.PORT;

//TODO require('hbs');
//handlebars es como simular algo a lo de Vue, angular etc y reutilizar componentes como footers, headers etc y no incrustarlos en cada página
//HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', error => console.log(error));//toma los archivos de esta ruta para que se pueda usar como Vue, Angular etc

// MIDDLEWARE (servir contenido estático)
// app.use(express.static('public', {
//     extensions: ['html']
// }));
app.use(express.static('public'));

/**
 * Estas rutas son para la aplicación del dash básico por eso se comentan
 */
//controlador
// app.get('/', function (req, res) {
//     res.render('home', {
//         nombre: 'Carlos García',
//         titulo: 'Curso Node'
//     });
// });

// app.get('/generic', function (req, res) {
//     res.render('generic', {
//         nombre: 'Carlos García',
//         titulo: 'Curso Node'
//     });
// });

// app.get('/elements', function (req, res) {
//     res.render('elements', {
//         nombre: 'Carlos García',
//         titulo: 'Curso Node'
//     });
// });


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});