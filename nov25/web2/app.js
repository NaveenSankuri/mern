const express = require('express');
const app = express();
const port = 3000;
const mustacheExpress = require('mustache-express');
const path = require('path');
const VIEWS_PATH = path.join(__dirname, '/views');

//middleware
app.use('/css', express.static('css'));



// setting mustache engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');


app.get('', (req, res) => {
    res.render('index');
})





app.listen(port, () => {
    console.log('server running....');
})