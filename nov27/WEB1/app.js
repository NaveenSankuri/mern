const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const port = 3000;
const userRoutes = require('./routers/rout');
const path = require('path');
const session = require('express-session');

//setting views path
const VIEWS_PATH = path.join(__dirname, '/views');

//middleware
app.use(session({
    secret: 'rajubhai',
    resave: false,
    saveUninitialized: false
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', userRoutes);
app.use(express.static('staticFiles'));


//setting view engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');









app.listen(port, () => {
    console.log('server running...')
})