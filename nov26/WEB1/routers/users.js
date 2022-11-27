const express = require('express');
const router = express.Router();


var userid = '11111';
var password = '12345';
router.get('/about', (req, res) => {
    res.render('about');
})
router.get('/history', (req, res) => {
    res.render('history');
})
router.get('/track', (req, res) => {
    res.render('track');
})

router.get('/home', (req, res) => {
    res.render('home');
})

router.get('', (req, res) => {
    res.render('login');
})
router.post('/log', (req, res) => {
    let uid = req.body.uid;
    let pass = req.body.pass;
    if (uid == userid && pass == password) {
        console.log('logged successfully!!!');
        res.render('home');
    }
    else {
        console.log('Invalid credentials!!!');
        res.render('login');
    }
})

module.exports = router;
