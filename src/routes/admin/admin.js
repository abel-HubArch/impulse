const express = require('express');
const router = express.Router();
const db = require('../firebase.js');

//Rutas index
router.get('/registrarse', (req, res) => {
    res.render('registrarse.html', {fallo: 'display: block;'})
    
});
router.get('/iniciar-sesion', (req, res) => {
    res.render('iniciarSession.html', {fallo: 'display: none;'})
});
router.post('/admin', (req, res) => {
    let user = req.body.user;
    let password = req.body.password;
    const doc = db.collection('negocios').doc(user);
    
    

    var getDoc = doc.get().then(doc =>{
        if (doc.exists) {      
            console.log(doc.data().password);
            if(doc.data().password == password){
                 
                res.render('admin.html', {datos: doc.data(), password: doc.data().password, user: user, propietario: doc.data().propietario, description: doc.data().description, nit: doc.data().nit})

            }
        }else{
            console.log('No existe usuario');
            res.render('iniciarSession.html', {fallo: 'display: block;'})
        }
    })
});

module.exports = router;