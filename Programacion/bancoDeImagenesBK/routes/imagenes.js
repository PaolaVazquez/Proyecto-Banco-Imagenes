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
    const imagen = await pool.query('SELECT * FROM imagenes');
    res.json(imagen);
});

router.get('/:nombre', async(req, res, next) => {
    const { nombre } = req.params;
    const imagen = await pool.query('SELECT * FROM imagenes WHERE nombre = ?', [nombre]);
    if (imagen.length > 0) {
        return res.json(imagen[0]);
    }
    res.status(404).json({ text: 'La imágen no existe' });
});

router.post('/', uploadImage, async(req, res) => {

    const { nombre, proyecto, orientacion, resolucion, tipo, fecha, fechaActualizada } = req.body;

    const newimagen = {
        imagen: req.file.path,
        nombre,
        proyecto,
        orientacion,
        resolucion,
        tipo,
        fecha,
        fechaActualizada
    };

    await pool.query('INSERT INTO imagenes set ?', [newimagen]);

    res.json({ message: 'Imagen guardada' });
    console.log(newimagen);
});

router.put('/:nombre', uploadImage, async(req, res) => {
    const { nombre } = req.params;
    const imagen = await pool.query('SELECT * FROM imagenes WHERE nombre = ?', [nombre]);

    if (imagen.length > 0) {
        try {
            //const { proyecto, orientacion, resolucion, tipo, fecha, fechaActualizada } = req.body;

            const newimagen = {
                nombre,
                proyecto: req.body.proyecto,
                orientacion: req.body.orientacion,
                resolucion: req.body.resolucion,
                tipo: req.body.tipo,
                fecha: req.body.fecha,
                fechaActualizada: req.body.fechaActualizada
            };

            console.log(newimagen);

            await pool.query('UPDATE imagenes SET ? WHERE nombre = ?', [newimagen, nombre]);

            res.json({ message: 'El registro fue actualizado' });

            console.log(req.body);
        } catch {
            console.log('Algo no salio bien.')
        }

    } else {
        res.status(400).json({ text: 'La imágen no fue encontrada' });
    }

});

router.delete('/:nombre', async(req, res) => {
    const { nombre } = req.params;
    const imagen = await pool.query('SELECT * FROM imagenes WHERE nombre = ?', [nombre]);
    const img = imagen[0].imagen;

    if (imagen.length > 0) {
        const imgeliminada = await pool.query('DELETE FROM imagenes WHERE nombre = ?', [nombre]);
        await fs.unlink(path.resolve(img));

        return res.json({
            message: 'Imágen eliminada',
            imgeliminada
        });

    } else {
        res.status(400).json({ text: 'La imágen que deseas eliminar no existe' });
    }
});


module.exports = router;