import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import {HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './componentes/skills/skills.component';
import { RedesComponent } from './componentes/redes/redes.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia.component';
import { EditareducacionComponent } from './componentes/educacion/editareducacion.component';
import { NuevaeducacionComponent } from './componentes/educacion/nuevaeducacion.component';
import { NuevoproyectosComponent } from './componentes/proyectos/nuevoproyectos.component';
import { EditarproyectosComponent } from './componentes/proyectos/editarproyectos.component';
import { EditarskillsComponent } from './componentes/skills/editarskills.component';
import { NuevoskillsComponent } from './componentes/skills/nuevoskills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditarencabezadoComponent } from './componentes/encabezado/editarencabezado.component';
import { EditarredesComponent } from './componentes/redes/editarredes.component';
import { interceptorProvider } from './servicios/interceptor-service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    RedesComponent,
    LoginComponent,
    HomeComponent,
    NuevaExperienciaComponent,
    EditarexperienciaComponent,
    EditareducacionComponent,
    NuevaeducacionComponent,
    NuevoproyectosComponent,
    EditarproyectosComponent,
    EditarskillsComponent,
    NuevoskillsComponent,
    FooterComponent,
    EditarencabezadoComponent,
    EditarredesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),


  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
