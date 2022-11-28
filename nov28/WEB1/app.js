const express = require('express');
const app = express();
const port = 4000;
const userRoutes = require('./routers/route')
const mustacheExpress = require('mustache-express');
const path = require('path');
const VIEWS_PATH = path.join(__dirname, '/views');
const session = require('express-session');
const bodyParser = require('body-parser');

//using middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', userRoutes);
app.use(express.static('static'));
app.use(session({
    secret: 'happybirthday',
    resave: false,
    saveUninitialized: false
}))

//setting view engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');


app.listen(port, () => {
    console.log('server running...');
})