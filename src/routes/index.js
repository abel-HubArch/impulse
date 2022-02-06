const express = require('express');
const router = express.Router();


//Rutas index
router.get('/', (req, res) => {
    res.render('index.html', { title: 'impulse'})
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros.html')
});

router.get('/catalogo', (req, res) => {
    res.render('catalogo.html')
});

router.get('/empresas', (req, res) => {
    res.render('empresas.html')
});

router.get('/contactanos', (req, res) => {
    res.render('contactanos.html')
});

module.exports = router;