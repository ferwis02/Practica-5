import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/servivio/crud.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
  formularioDeEstudiantes:FormGroup;
  elID:any;

  constructor(
    private activateRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
  ) { 
    this.elID = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    
    this.crudService.ObtenerEstudiante(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeEstudiantes.setValue({
          matricula:respuesta[0]['matricula'],
          nombre:respuesta[0]['nombre'],
          fecha:respuesta[0]['fecha'],
          motivo:respuesta[0]['motivo'],
          valido:respuesta[0]['valido'],
          comentario:respuesta[0]['comentario'],
        })
      }
    );
    this.formularioDeEstudiantes = this.formulario.group(
      {
        matricula:[''],
        nombre:[''],
        fecha:[''],
        motivo:[''],
        valido:[''],
        comentario:[''],
      }
    )

  }

  ngOnInit(): void {
  }

}
