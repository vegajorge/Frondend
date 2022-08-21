import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-nuevoskills',
  templateUrl: './nuevoskills.component.html',
  styleUrls: ['./nuevoskills.component.css']
})
export class NuevoskillsComponent implements OnInit {
  nombre: string = '';
  porcentaje: number;

  constructor(private skillsService: SkillsService, private router: Router) { }
  ngOnInit(): void {
  }

  onCreate(): void {
    const ski = new Skills(this.nombre, this.porcentaje);
    this.skillsService.save(ski).subscribe(
      data=>{
        alert('Habilidad añadida');
        this.router.navigate(['']);
      }, err=>{
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}