var express = require('express');
var router = express.Router();
const pool = require('../database');
const passport = require('passport');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

/* METODOS PARA CRUD*/
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

router.post('/', [
    check('nombre').isLength({ min: 1 }),
    check('apellidos').isLength({ min: 3, max: 60 }),
    check('fechaN').isLength({ min: 3, max: 10 }),
    check('puesto').isLength({ min: 3 }),
    check('fechaIngreso').isLength({ min: 3, max: 10 }),
    check('usuario').isLength({ min: 3 }),
    check('password').isLength({ min: 5 })
], async(req, res) => {


    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(422).json({ error: errores.array() });
    }

    const { nombre, apellidos, fechaN, puesto, fechaIngreso, usuario } = req.body;

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const newempleado = {
        nombre,
        apellidos,
        fechaN,
        puesto,
        fechaIngreso,
        usuario,
        password
    };
    await pool.query('INSERT INTO empleados set ?', [newempleado]);

    res.json({ message: 'Registro guardado' });
    console.log(req.body);

});

router.post('iniciosesion', (req, res) => {
    passport.authenticate('local.signup', {
        successRedirect: '/inicio',
        failureRedirect: '/iniciosesion',
        failureFlash: true
    })
    console.log('iniciar sesion');
});

router.put('/:usuario', [
    check('nombre').isLength({ min: 1 }),
    check('apellidos').isLength({ min: 3, max: 60 }),
    check('fechaN').isLength({ min: 3, max: 10 }),
    check('puesto').isLength({ min: 3 }),
    check('fechaIngreso').isLength({ min: 3, max: 10 }),
    check('usuario').isLength({ min: 3 }),
    check('password').isLength({ min: 5 })
], async(req, res) => {

    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(422).json({ error: errores.array() });
    }

    const { usuario } = req.params;
    const empleado = await pool.query('SELECT * FROM empleados WHERE usuario = ?', [usuario]);
    if (empleado.length > 0) {


        const { nombre, apellidos, fechaN, puesto, fechaIngreso } = req.body;

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const newempleado = {
            nombre,
            apellidos,
            fechaN,
            puesto,
            fechaIngreso,
            usuario,
            password
        };

        await pool.query('UPDATE empleados SET ? WHERE usuario = ?', [newempleado, usuario]);

        res.json({ message: 'El registro fue actualizado' });

        console.log(req.body);
    } else {
        res.status(400).json({ text: 'El usuario no fue encontrado' });
    }


});

router.delete('/:usuario', [
    check('usuario').isLength({ min: 3 })
], async(req, res) => {

    errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(422).json({ error: errores.array() });
    }

    const { usuario } = req.params;
    const empleado = await pool.query('SELECT * FROM empleados WHERE usuario = ?', [usuario]);
    if (empleado.length > 0) {
        await pool.query('DELETE FROM empleados WHERE usuario = ?', [usuario]);
        res.json({ message: 'El registro fue eliminado' });
        console.log(req.body);
    } else {
        res.status(400).json({ text: 'El usuario no existe' });
    }
});




module.exports = router;