const express = require('express');
const app = express();
const PORT = 8081;
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------------------------------------------------------------- */
/*                                 PUG CONFIG                                 */
/* -------------------------------------------------------------------------- */

app.set('views', './src/views');
app.set('view engine', 'pug')
app.use(express.static('public'));
/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */
const data = []

/* -------------------------------------------------------------------------- */
/*                                   RENDER                                   */
/* -------------------------------------------------------------------------- */
app.get('/productos',(req,res)=>{
    res.render('index',{data})
})
app.get('/',(req,res)=>{
    res.render('form',{})
})
/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
app.post('/productos', (req, res) => {
    const { body } = req;
    data.push(body);
  });
const server = app.listen(8081, () => {
  console.log(`server is runing at http://localhost:${PORT}`);
});
server.on('error', (err) => {
  console.log(err);
});
