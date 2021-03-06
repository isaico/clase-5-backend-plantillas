// eslint-disable-next-line import/no-unresolved
const express = require('express');

const { engine } = require('express-handlebars');

const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------------------------------------------------------------- */
/*                                    data                                    */
/* -------------------------------------------------------------------------- */
const data = [];
let listExist = false;

/* -------------------------------------------------------------------------- */
/*                                 HBS config                                 */
/* -------------------------------------------------------------------------- */
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaulLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layout',
    partialsDir: __dirname + '/views/partials/',
  })
);
/* -------------------------------------------------------------------------- */
/*                                   RENDERS                                  */
/* -------------------------------------------------------------------------- */
app.get('/', (req, res) => {
  res.render('main', { layout: 'index', data });
});
app.get('/productos', (req, res) => {
  res.render('productos-main', { layout: 'index', data, listExist });
});
/* ----------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
app.post('/productos', (req, res) => {
  const { body } = req;
  data.push(body);
  listExist = true;
});

/* ------------------------------------ ----------------------------------- */
const server = app.listen(PORT, () => {
  console.log(`server is runing at http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.log(err);
});
