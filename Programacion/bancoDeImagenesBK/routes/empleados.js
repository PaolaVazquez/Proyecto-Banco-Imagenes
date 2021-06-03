var express = require('express');
var router = express.Router();
const pool = require('../database');
const passport = require('passport');

/* GET users listing. */
router.get('/', async(req, res, next) => {
    const empleado = await pool.query('SELECT * FROM empleados');
    res.json(empleado);
    console.log(empleado);
});

router.get('/:usuario', async(req, res, next) => {
    const { usuario } = req.params;
    const empleado = await pool.query('SELECT * FROM empleados WHERE usuario = ?', [usuario]);
    if (empleado.length > 0) {
        return res.json(empleado[0]);
    }
    res.status(404).json({ text: 'Registro no existente' });
});

router.post('/', async(req, res) => {
    const { nombre, apellidos, fechaN, puesto, fechaIngreso, usuario, contraseña } = req.body;
    const newempleado = {
        nombre,
        apellidos,
        fechaN,
        puesto,
        fechaIngreso,
        usuario,
        contraseña
    };
    await pool.query('INSERT INTO empleados set ?', [newempleado]);

    res.json({ message: 'Registro guardado' });
    console.log(req.body);

});

router.post('iniciosesion', (req, res) => {
    passport.authenticate('loca.signup', {
        successRedirect: '/inicio',
        failureRedirect: 'signup'
    })
    console.log('iniciar sesion');
});

router.put('/:usuario', async(req, res) => {
    const { usuario } = req.params;
    const { nombre, apellidos, fechaN, puesto, fechaIngreso, contraseña } = req.body;
    const empleado = {
        nombre,
        apellidos,
        fechaN,
        puesto,
        fechaIngreso,
        usuario,
        contraseña
    };
    await pool.query('UPDATE empleados SET ? WHERE usuario = ?', [empleado, usuario]);
    res.json({ message: 'El registro fue actualizado' });
    console.log(req.body);
});

router.delete('/:usuario', async(req, res) => {
    const { usuario } = req.params;
    await pool.query('DELETE FROM empleados WHERE usuario = ?', [usuario]);
    res.json({ message: 'El registro fue eliminado' });
    console.log(req.body);
});



module.exports = router;