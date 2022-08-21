import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  ski: Skills[] = [];
 
  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }
  
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarSkills(): void {
    this.skillsService.lista().subscribe(data => { this.ski = data; })
  }
  
  delete(id?: number){
    if(id != undefined){
      this.skillsService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
  }