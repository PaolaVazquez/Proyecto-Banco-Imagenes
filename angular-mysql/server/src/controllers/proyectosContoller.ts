import {Request, Response} from 'express';

class ProyectosContoller{
     public proyectos (req: Request, res: Response) {
        res.send('proyectos activos')
    }
}

export const proyectosContoller = new ProyectosContoller();