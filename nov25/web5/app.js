const express = require('express');
const app = express();
const port = 3000;
const mustacheExpress = require('mustache-express');
const path = require('path');
const VIEWS_PATH = path.join(__dirname, '/views');



//middlewares
app.use('/css', express.static('css'))




//setting view engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');




app.get('', (req, res) => {
    res.render('home');
})






app.listen(port, () => {
    console.log('server running...');
})