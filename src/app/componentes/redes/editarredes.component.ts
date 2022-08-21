import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/modelo/redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-editarredes',
  templateUrl: './editarredes.component.html',
  styleUrls: ['./editarredes.component.css']
})
export class EditarredesComponent implements OnInit {

  
  red : Redes = null;

  constructor(private redesService: RedesService, private activatedRouter: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.redesService.detail(id).subscribe(
      data =>{
        this.red = data;
      }, err =>{
        alert("Error al modificar redes");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.redesService.update(id, this.red).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar redes sociales");
        this.router.navigate(['']);
      }
    )
  }
}