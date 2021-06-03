import express, {Request, Response} from 'express';
import pool from '../database';
const { check, validationResult } = require('express-validator');
import {Empleado} from '../models/empleado';


class EmpleadosContoller{
     public async list (req: Request, res: Response) {
        const empleado = await pool.query('SELECT * FROM empleados');
        res.json(empleado);
    }

    public async getOne(req: Request, res: Response): Promise <any> {
        const {usuario} = req.params;
        const empleado = await pool.query('SELECT * FROM empleados WHERE usuario = ?',  [usuario]);
        if(empleado.length > 0){
            return res.json(empleado[0]);
        }
        res.status(404).json({text: 'Registro no existente'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO empleados set ?', [req.body]);
        res.json({message: 'Registro guardado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {usuario} = req.params;
        await pool.query('UPDATE empleados SET ? WHERE usuario = ?', [req.body, usuario]);
        res.json({message: 'El registro fue actualizado'});
    }
    
    public async delete (req: Request, res: Response): Promise <void>{
        const {usuario} = req.params;
        await pool.query('DELETE FROM empleados WHERE usuario = ?',  [usuario]);
        res.json({message: 'El registro fue eliminado'});
    }

}

export const empleadosContoller = new EmpleadosContoller();