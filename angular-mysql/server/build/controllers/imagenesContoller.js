"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagenesContoller = void 0;
class ImagenesContoller {
    imagenes(req, res) {
        res.send('imagenes seleccionadas');
    }
}
exports.imagenesContoller = new ImagenesContoller();
