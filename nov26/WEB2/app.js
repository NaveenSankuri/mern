const express = require('express');
const app = express();
const port = 3000;
const mustacheExpress = require('mustache-express');
const path = require('path');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');


//setting views path
const VIEWS_PATH = path.join(__dirname, '/views');

//middlewares
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('', userRoutes);



//setting up mustache engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache');




app.listen(port, () => {
    console.log('server running...');
})