import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editarskills',
  templateUrl: './editarskills.component.html',
  styleUrls: ['./editarskills.component.css']
})
export class EditarskillsComponent implements OnInit {

  ski : Skills = null;

  constructor(private skillsService: SkillsService, private activatedRouter: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(
      data =>{
        this.ski = data;
      }, err =>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.update(id, this.ski).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}