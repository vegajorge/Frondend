import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  expURL = 'https://backendjorge.onrender.com/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.expURL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'nuevo/', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, proyectos);

  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}