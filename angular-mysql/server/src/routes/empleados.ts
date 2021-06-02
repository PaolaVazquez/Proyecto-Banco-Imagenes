import {Router} from 'express';

import {empleadosContoller} from '../controllers/empleadosController';

class Empleados{
   public router : Router = Router ();

   constructor(){
    this.config();
   }
   config(): void{
       this.router.get('/', empleadosContoller.list);
       this.router.get('/:usuario', empleadosContoller.getOne);
       this.router.post('/', empleadosContoller.create);
       this.router.put('/:usuario', empleadosContoller.update);
       this.router.delete('/:usuario', empleadosContoller.delete);
   }
}

 const empleados = new Empleados();
 export default empleados.router;