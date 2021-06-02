"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectosContoller_1 = require("../controllers/proyectosContoller");
class Proyectos {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', proyectosContoller_1.proyectosContoller.proyectos);
    }
}
const proyectos = new Proyectos();
exports.default = proyectos.router;
