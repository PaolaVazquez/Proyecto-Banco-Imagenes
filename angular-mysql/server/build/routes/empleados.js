"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadosController_1 = require("../controllers/empleadosController");
class Empleados {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', empleadosController_1.empleadosContoller.list);
        this.router.get('/:usuario', empleadosController_1.empleadosContoller.getOne);
        this.router.post('/', empleadosController_1.empleadosContoller.create);
        this.router.put('/:usuario', empleadosController_1.empleadosContoller.update);
        this.router.delete('/:usuario', empleadosController_1.empleadosContoller.delete);
    }
}
const empleados = new Empleados();
exports.default = empleados.router;
