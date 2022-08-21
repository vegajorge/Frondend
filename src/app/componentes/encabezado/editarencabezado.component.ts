import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editarencabezado',
  templateUrl: './editarencabezado.component.html',
  styleUrls: ['./editarencabezado.component.css']
})
export class EditarencabezadoComponent implements OnInit {

  enca : Persona = null;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(
      data =>{
        this.enca = data;
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id,this.enca).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error modficar persona");
        this.router.navigate(['']);
      }
    )
  }
}