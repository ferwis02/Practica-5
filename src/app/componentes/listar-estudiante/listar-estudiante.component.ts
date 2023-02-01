import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servivio/crud.service';


@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {
  Estudiantes:any;

  constructor(
    private CrudService:CrudService
    ) { }

  ngOnInit(): void {
    this.CrudService.ObtenerEstudiantes().subscribe(
      respuesta=>{
        console.log(respuesta);
        this.Estudiantes=respuesta;
      }
    );
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(confirm("¿Está seguro de borrar el registro?")){
    this.CrudService.BorrarEstudiante(id).subscribe((respuesta)=>{
      this.Estudiantes.splice(iControl,1);
    });
    }
 
  }
}
