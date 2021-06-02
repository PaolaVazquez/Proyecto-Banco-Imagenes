"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectosContoller = void 0;
class ProyectosContoller {
    proyectos(req, res) {
        res.send('proyectos activos');
    }
}
exports.proyectosContoller = new ProyectosContoller();
