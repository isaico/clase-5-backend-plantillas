const express = require('express');
const app = express();
const PORT = 8082;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* -------------------------------------------------------------------------- */
/*                                 EJS CNOFIG                                 */
/* -------------------------------------------------------------------------- */
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */
const data = [];
var listExist = false;
/* -------------------------------------------------------------------------- */
/*                                   RENDERS                                  */
/* -------------------------------------------------------------------------- */
app.get('/', (req, res) => {
  res.render('pages/index', {});
});
app.get('/productos', (req, res) => {
  res.render('pages/productos', {data, listExist});
});
/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
app.post('/productos', (req, res) => {
    const { body } = req;
    data.push(body);
    listExist = true;
  });


const server = app.listen(8082, () => {
  console.log(`server is runing at http://localhost:8082`);
});
server.on('error', (err) => {
  console.log(err);
});
