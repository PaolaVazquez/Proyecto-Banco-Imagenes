import {Request, Response} from 'express';

class ImagenesContoller{
     public imagenes (req: Request, res: Response) {
        res.send('imagenes seleccionadas')
    }
}

export const imagenesContoller = new ImagenesContoller();