import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditareducacionComponent } from './componentes/educacion/editareducacion.component';
import { NuevaeducacionComponent } from './componentes/educacion/nuevaeducacion.component';
import { EditarencabezadoComponent } from './componentes/encabezado/editarencabezado.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarproyectosComponent } from './componentes/proyectos/editarproyectos.component';
import {NuevoproyectosComponent} from './componentes/proyectos/nuevoproyectos.component';
import { EditarredesComponent } from './componentes/redes/editarredes.component';
import { EditarskillsComponent } from './componentes/skills/editarskills.component';
import { NuevoskillsComponent } from './componentes/skills/nuevoskills.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'login', component:LoginComponent},
{path: 'nuevaexperiencia', component:NuevaExperienciaComponent},
{path: 'editarexperiencia/:id', component:EditarexperienciaComponent},
{path: 'nuevaeducacion', component:NuevaeducacionComponent},
{path: 'editareducacion/:id', component:EditareducacionComponent},
{path: 'nuevoproyecto', component:NuevoproyectosComponent},
{path: 'editarproyecto/:id', component:EditarproyectosComponent},
{path: 'nuevoskills', component:NuevoskillsComponent},
{path: 'editarskills/:id', component:EditarskillsComponent},
{path: 'editarencabezado/:id', component:EditarencabezadoComponent},
{path: 'editarredes/:id', component:EditarredesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
