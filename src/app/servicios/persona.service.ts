import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://backendarg-vegajorgeluis.koyeb.app/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + 'lista/perfil');

  }
  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }
  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'nueva', persona);
  }
  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}