const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('home');
})
router.get('/track', (req, res) => {
    res.render('track');
})

router.get('/history', (req, res) => {
    res.render('history');
})

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/', (req, res) => {
    res.render('login');
})
let id = 'naveen'
let password = '12345'
router.post('/home', (req, res) => {
    let uid = req.body.uid;
    let pass = req.body.pass;
    if (id == uid && pass == password) {
        console.log('logged in successfully!!');
        if (req.session) {
            req.session.user = uid;
        }
        let x = {
            user: req.session.user
        }
        console.log('logged in successfully!!');
        res.render('home', x);
    } else {
        console.log('Invalid Credentials!!');
        res.redirect('/login');
    }
})



module.exports = router;