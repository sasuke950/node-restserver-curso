const jwt = require('jsonwebtoken');
//====================
//Verificar Token
//====================

let verificaToken = (req, res, next) => { // esta función se ejecuta en el app.get('/usuario', verificaToken, (req, res) => si no especificamos next() no continua ejecutando su lógica sino solo la logica de aquí

    let token = req.get('token'); //Extrae la informacion que enviamos req = data

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'El token no es válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        console.log(`Token Correcto`);
        next();
    });
};

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no tiene permisos para agregar'
            }
        })
    }

};

module.exports = { verificaToken, verificaAdminRole };