import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AlquilerRoutingModule } from './alquiler-routing.module';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';

import { AlquilerService } from './shared/service/alquiler.service';

import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AlquilerComponent,
    CrearAlquilerComponent,
    ListarAlquilerComponent
  ],
  imports: [
    SharedModule,
    AlquilerRoutingModule
  ],
  providers: [AlquilerService, DatePipe]
})
export class AlquilerModule { }
