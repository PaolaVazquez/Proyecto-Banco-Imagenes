var express = require('express');
var router = express.Router();
const pool = require('../database');
const { check, validationResult } = require('express-validator');
const fs = require('fs-extra').promises;
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: path.join('uploads'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname))
    }
});

const uploadImage = multer({
    storage,
    dest: path.join('uploads'),
    fileFilter: (req, file, cb) => {
        const filetypes = /jpg|jpeg|png/
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: El archivo debe ser una imagen válida");

    }
}).single('imagen');


router.get('/', async(req, res, next) => {
    const proyecto = await pool.query('SELECT * FROM proyectos');
    res.json(proyecto);
});

router.get('/:proyecto', async(req, res, next) => {
    const { proyecto } = req.params;
    const proyectob = await pool.query('SELECT * FROM proyectos WHERE proyecto = ?', [proyecto]);
    if (proyectob.length > 0) {
        return res.json(proyecto[0]);
    }
    res.status(404).json({ text: 'El proyecto no existe' });
});

router.post('/', uploadImage, async(req, res) => {

    const { proyecto, descripcion } = req.body;
    const newproyecto = {
        imagen: req.file.path,
        proyecto,
        descripcion
    };

    await pool.query('INSERT INTO proyectos set ?', [newproyecto]);

    res.json({ message: 'Proyecto creado' });
    console.log(newproyecto);
});

router.put('/:proyecto', uploadImage, async(req, res) => {
    const { proyecto } = req.params;
    const proyectob = await pool.query('SELECT * FROM proyectos WHERE proyecto = ?', [proyecto]);

    if (proyectob.length > 0) {
        try {
            //const { proyecto, orientacion, resolucion, tipo, fecha, fechaActualizada } = req.body;

            const newproyecto = {
                proyecto: req.body.proyecto,
                descripcion: req.body.descripcion
            };

            console.log(newproyecto);

            await pool.query('UPDATE proyectos SET ? WHERE proyecto = ?', [newproyecto, proyecto]);

            res.json({ message: 'El registro fue actualizado' });

            console.log(req.body);
        } catch {
            console.log('Algo no salio bien.')
        }

    } else {
        res.status(400).json({ text: 'El proyecto no fue encontrado' });
    }

});

router.delete('/:proyecto', async(req, res) => {
    const { proyecto } = req.params;
    const proyectob = await pool.query('SELECT * FROM proyectos WHERE proyecto = ?', [proyecto]);
    const img = proyectob[0].imagen;

    if (proyectob.length > 0) {
        const proyeliminado = await pool.query('DELETE FROM proyectos WHERE proyecto = ?', [proyecto]);
        await fs.unlink(path.resolve(img));

        return res.json({
            message: 'Proyecto eliminado',
            proyeliminado
        });

    } else {
        res.status(400).json({ text: 'El proyecto que deseas eliminar no existe' });
    }
});


module.exports = router;