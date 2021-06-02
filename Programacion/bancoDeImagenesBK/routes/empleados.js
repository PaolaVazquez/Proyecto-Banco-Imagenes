var express = require('express');
var router = express.Router();
const pool = require('../database');

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

router.post('/', async function(req, res) {
    await pool.query('INSERT INTO empleados set ?', [req.body]);

    res.json({ message: 'Registro guardado' });
    console.log(req.body);

});

router.put('/:usuario', async(req, res) => {
    const { usuario } = req.params;
    await pool.query('UPDATE empleados SET ? WHERE usuario = ?', [req.body, usuario]);
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