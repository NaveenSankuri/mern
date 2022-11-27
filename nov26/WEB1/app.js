const express = require('express');
const app = express();
const port = 3000;
const mustacheExpress = require('mustache-express');
const path = require('path');
const userRoutes = require('./routers/users');
const bodyParser = require('body-parser');


//middlewares
app.use('/css', express.static('css'));//using static css file
app.use('/img', express.static('img'));//using static image files
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', userRoutes);


//setting views path
const VIEWS_PATH = path.join(__dirname, '/views')

//setting app engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');













app.listen(port, () => {
    console.log('server running...');
})