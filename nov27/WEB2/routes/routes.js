const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('login');
})
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
let id = 'naveen';
let p = '12345';
router.post('/home', (req, res) => {
    let uid = req.body.uid;
    let pass = req.body.pass;
    if (uid == id && pass == p) {
        console.log('successfully loged in!!');
        if (req.session) {
            req.session.user = uid;
        }
        let x = {
            user: req.session.uid
        }
        res.render('home', x);
    } else {
        console.log('Invalid credentials!!');
        res.redirect('/');
    }
})




module.exports = router;