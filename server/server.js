require('../config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('../routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw new err;
    console.log('Bases de Datos ONLINE');
});

app.listen(process.env.PORT, () => console.log(`Escuchando desde el puerto ${process.env.PORT}`));