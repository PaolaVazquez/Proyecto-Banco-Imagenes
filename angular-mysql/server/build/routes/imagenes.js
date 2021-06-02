"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenesContoller_1 = require("../controllers/imagenesContoller");
class Imagenes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', imagenesContoller_1.imagenesContoller.imagenes);
    }
}
const imagenes = new Imagenes();
exports.default = imagenes.router;
