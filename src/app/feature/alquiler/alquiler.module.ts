import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';



@NgModule({
  declarations: [
    AlquilerComponent,
    CrearAlquilerComponent,
    ListarAlquilerComponent
  ],
  imports: [
    CommonModule,
    AlquilerRoutingModule
  ]
})
export class AlquilerModule { }
