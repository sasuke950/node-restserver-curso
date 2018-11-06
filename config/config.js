//========================
//Puerto
//========================

process.env.PORT = process.env.PORT || 3000;
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//========================
//Base de Datos
//========================
let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://127.0.0.1:27017/admin';
// } else {
urlDB = 'mongodb://admin:joelmay123@ds155313.mlab.com:55313/admin-js'
    //}

process.env.URLDB = urlDB;