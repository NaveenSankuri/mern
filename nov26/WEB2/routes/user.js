const express = require('express');
const router = express.Router();

let a = 'qwe';
let b = '123';

router.get('/home', (req, res) => {
    res.render('home');
})
router.get('/about', (req, res) => {
    res.render('about');
})
router.get('/history', (req, res) => {
    res.render('history');
})
router.get('/track', (req, res) => {
    res.render('track');
})

router.get('', (req, res) => {
    res.render('login');
})
router.post('/log', (req, res) => {
    let uid = req.body.uid;
    let pass = req.body.pass;
    if (uid == a && pass == b) {
        console.log('loged successfully!!');
        res.render('home');
    }
    else {
        console.log('INVALID CREDENTIALS!!');
        res.redirect('/');
    }

})



module.exports = router;