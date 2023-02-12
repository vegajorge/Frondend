import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../modelo/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

   expURL = 'https://backendjorge.onrender.com/redes/';
  
    constructor(private httpClient: HttpClient) { }
  
    public lista(): Observable<Redes[]>{
      return this.httpClient.get<Redes[]>(this.expURL + 'lista');
    }
  
    public detail(id: number): Observable<Redes>{
      return this.httpClient.get<Redes>(this.expURL + `detail/${id}`);
    }
  
    public save(redes: Redes): Observable<any>{
      return this.httpClient.post<any>(this.expURL + 'nuevo/', redes);
    }
  
    public update(id: number, redes: Redes): Observable<any>{
      return this.httpClient.put<any>(this.expURL + `editar/${id}`, redes);
  
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
    }
  }