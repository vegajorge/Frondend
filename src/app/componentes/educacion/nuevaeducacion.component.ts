import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from  'src/app/modelo/educacion';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit{
  nombre: string = '';
  descripcion: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }
  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombre, this.descripcion);
    this.educacionService.save(edu).subscribe(
      data=>{
        alert('Educacion añadida');
        this.router.navigate(['']);
      }, err=>{
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}