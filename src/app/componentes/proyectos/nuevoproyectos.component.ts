import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-nuevoproyectos',
  templateUrl: './nuevoproyectos.component.html',
  styleUrls: ['./nuevoproyectos.component.css']
})
export class NuevoproyectosComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';

  constructor(private proyectosService: ProyectosService,private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const proye = new Proyectos(this.nombre, this.descripcion);
    this.proyectosService.save(proye).subscribe(
      data=>{
        alert('Proyecto añadido');
        this.router.navigate(['']);
      }, err=>{
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}