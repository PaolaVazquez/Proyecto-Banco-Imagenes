import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

//Listado de componentes
import {InicioComponent} from './inicio/inicio.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {ProyectosComponent} from './proyectos/proyectos.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';

const routes: Routes =[
  {path: 'inicio', component: InicioComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'iniciosesion', component: InicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
