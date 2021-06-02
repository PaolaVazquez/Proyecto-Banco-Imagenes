import {Router} from 'express';
import {proyectosContoller} from '../controllers/proyectosContoller';

class Proyectos{
   public router : Router = Router ();

   constructor(){
    this.config();
   }
   config(): void{
       this.router.get('/', proyectosContoller.proyectos);
   }
}

 const proyectos = new Proyectos();
 export default proyectos.router;