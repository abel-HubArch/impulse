const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const db = require('../firebase.js');

FieldValue = require('firebase-admin').firestore.FieldValue;


//crear categoria api
router.post('/admin/crearCategoria', (req, res) => {
    let categoria = req.body.categoriaNew;
    let empresaId = req.body.empresa;


 db.collection('catalogos').doc(empresaId).update({
    categorias: FieldValue.arrayUnion(categoria)
  }).then(function(){
      res.sendStatus(200)
  });

})

router.post('/admin/BorrarCategoria', (req, res) =>{
    let categoria = req.body.categoriaRemove;
    let empresaId = req.body.empresa;
    db.collection('catalogos').doc(empresaId).update({
        categorias: FieldValue.arrayRemove(categoria)
      }).then(function(){
          res.sendStatus(200)
      });
});


module.exports = router;
/*  console.log(db.collection('catalogos').doc('Llajuita').collection('pollos').doc('Pollos Spiedo').get().then(doc =>{
                  console.log(doc.data());
              }));  */ 