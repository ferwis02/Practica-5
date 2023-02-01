import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from './Estudiante';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost/estudiantes/'
  constructor(private clienteHttp:HttpClient) { }

  AgregarEstudiante(datosEstudiante:Estudiante):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEstudiante); 
  }

  ObtenerEstudiantes(){
    return this.clienteHttp.get(this.API);
  }
  BorrarEstudiante(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar=",id); 
  }
  ObtenerEstudiante(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar=",id); 
  }

}
