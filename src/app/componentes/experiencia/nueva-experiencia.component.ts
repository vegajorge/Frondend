import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';

  constructor(private experienciaService: ExperienciaService,private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia(this.nombre, this.descripcion);
    this.experienciaService.save(expe).subscribe(
      data=>{
        alert('Experiencia añadida');
        this.router.navigate(['']);
      }, err=>{
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}