import { Component, OnInit } from '@angular/core';
import { Alquiler } from '@alquiler/shared/model/alquiler';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { Respuesta } from '@shared/components/respuesta/model/respuesta';
import { RespuestaService } from '@shared/components/respuesta/service/respuesta.service';

@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html',
  styleUrls: ['./listar-alquiler.component.css']
})
export class ListarAlquilerComponent implements OnInit {

  constructor(private alquilerService: AlquilerService, private respuestaService: RespuestaService) { }

  alquileres: Alquiler[] = [];

  alquiler: Alquiler;
  respuesta: Respuesta;
  ngOnInit(): void {
    this.listarAlquileres();
  }

  listarAlquileres(): void {
    this.alquilerService.listar().subscribe(
      response => {
        this.alquileres = response;

        if(this.alquileres.length == 0) {
          this.respuesta = new Respuesta('Opss...', 'Sin resultados.', false);
          this.respuestaService.emite(this.respuesta);
        }
        
      });
  }

  onAlquilerEliminado(){
    this.listarAlquileres();
  }
  
}
