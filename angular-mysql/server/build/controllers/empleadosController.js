"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleadosContoller = void 0;
const database_1 = __importDefault(require("../database"));
const { check, validationResult } = require('express-validator');
class EmpleadosContoller {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleado = yield database_1.default.query('SELECT * FROM empleados');
            res.json(empleado);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.params;
            const empleado = yield database_1.default.query('SELECT * FROM empleados WHERE usuario = ?', [usuario]);
            if (empleado.length > 0) {
                return res.json(empleado[0]);
            }
            res.status(404).json({ text: 'Registro no existente' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO empleados set ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.params;
            yield database_1.default.query('UPDATE empleados SET ? WHERE usuario = ?', [req.body, usuario]);
            res.json({ message: 'El registro fue actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.params;
            yield database_1.default.query('DELETE FROM empleados WHERE usuario = ?', [usuario]);
            res.json({ message: 'El registro fue eliminado' });
        });
    }
}
exports.empleadosContoller = new EmpleadosContoller();
