const { response } = require('express');


const usuariosGet = (req, res= response ) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        msg: 'GET API-controlador',
        q,
        nombre,
        apikey,
    });
};

const usuariosPost = (req, res= response ) => {
    
    const { nombre, edad } = req.body;
    
    res.json({
        msg: 'POST - controlador',
        nombre,
        edad,
    });
};

const usuariosPut = (req, res= response ) => {

    const id = req.params.id;

    res.json({
        msg: 'PUT - controlador',
        id
    });
};

const usuariosPatch = (req, res= response ) => {
    res.json({
        msg: 'Patch - controlador'
    });
};

const usuariosDelete = (req, res= response ) => {
    res.json({
        msg: 'delete - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}