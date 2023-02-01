import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgregarEstudianteComponent } from './componentes/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './componentes/editar-estudiante/editar-estudiante.component';
import { ListarEstudianteComponent } from './componentes/listar-estudiante/listar-estudiante.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEstudianteComponent,
    EditarEstudianteComponent,
    ListarEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
