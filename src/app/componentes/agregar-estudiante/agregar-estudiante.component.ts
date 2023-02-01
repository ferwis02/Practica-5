import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/servivio/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {
  formulariodestudiante: FormGroup;

  constructor ( 
    public formulario:FormBuilder ,
    private crudService:CrudService,
    private ruteador:Router
    ) { 
    this.formulariodestudiante = this.formulario.group({
      matricula:[''],
      nombre:[''],
      fecha:[''],
      motivo:[''],
      valido:[''],
      comentario:[''],

    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): any{
    console.log("Enviando datos");
    console.log(this.formulariodestudiante.value);
    this.crudService.AgregarEstudiante(this.formulariodestudiante.value).subscribe();
  
    this.ruteador.navigateByUrl('/listar-estudiantes');
  }

}
