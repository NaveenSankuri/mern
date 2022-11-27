const express = require('express');
const session = require('express-session');
const router = express.Router();


router.get('', (req, res) => {
    res.render('login');
})
router.get('/home', (req, res) => {
    let x = {
        user: req.session.user
    }

    res.render('home', x);
})
router.get('/about', (req, res) => {
    res.render('about');
})
router.get('/track', (req, res) => {
    res.render('track');
})
router.get('/history', (req, res) => {
    res.render('history');
})
let id = 'naveen';
let password = '123';
router.post('/home', (req, res) => {
    let uid = req.body.uid;
    let pass = req.body.pass;
    if (uid == id && pass == password) {
        if (req.session) {
            req.session.user = uid;
        }
        let x = {
            user: req.session.user
        }
        console.log('login successfully!!');
        res.render('home', x);
    } else {
        console.log('Invalid Credentials!!');
        res.redirect('/');
    }
})



module.exports = router;