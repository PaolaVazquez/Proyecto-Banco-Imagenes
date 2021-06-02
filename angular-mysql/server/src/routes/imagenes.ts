import {Router} from 'express';
import {imagenesContoller} from '../controllers/imagenesContoller';

class Imagenes{
   public router : Router = Router ();

   constructor(){
    this.config();
   }
   config(): void{
       this.router.get('/', imagenesContoller.imagenes);
   }
}

 const imagenes = new Imagenes();
 export default imagenes.router;