const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/routes');
const mustacheExpress = require('mustache-express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');


//setting up views path
const VIEWS_PATH = path.join(__dirname, '/views');
//using middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'baby',
    resave: false,
    saveUninitialized: false
}))
app.use('', userRoutes);
app.use(express.static('staticFiles'));


//setting view engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');







app.listen(port, () => {
    console.log('server running...');
})