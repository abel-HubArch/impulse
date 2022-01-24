const express = require('express');
const morgan = require('morgan');
const path = require('path');

//Inicializando express
const app = express();

//configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

//midelWare
app.use(morgan('dev'));


//Routes
app.use(require('./routes'));

//Localizacion de muestra de archivos
app.use(express.static(path.join(__dirname, 'public')));

//Activar puerto
app.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto: ', app.get('port'));
});
