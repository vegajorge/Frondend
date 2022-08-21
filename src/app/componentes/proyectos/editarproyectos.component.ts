import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editarproyectos',
  templateUrl: './editarproyectos.component.html',
  styleUrls: ['./editarproyectos.component.css']
})
export class EditarproyectosComponent implements OnInit {

  proye : Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(
      data =>{
        this.proye = data;
      }, err =>{
        alert("Error al modificar el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.update(id, this.proye).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }
}