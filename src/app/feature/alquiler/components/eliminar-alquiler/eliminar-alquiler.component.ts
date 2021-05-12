import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Alquiler } from '@alquiler/shared/model/alquiler';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { Respuesta } from '@shared/components/respuesta/model/respuesta';
import { RespuestaService } from '@shared/components/respuesta/service/respuesta.service';

@Component({
  selector: 'app-eliminar-alquiler',
  templateUrl: './eliminar-alquiler.component.html',
  styleUrls: ['./eliminar-alquiler.component.css']
})
export class EliminarAlquilerComponent implements OnInit {

  constructor(private alquilerService: AlquilerService, private respuestaService: RespuestaService) { }


  @Input() alquiler: Alquiler;
  @Output() alquilerEliminado = new EventEmitter<boolean>();
  respuesta: Respuesta;

  ngOnInit(): void {
  }

  cancelarAlquiler(): void {
    this.alquilerService.cancelar(this.alquiler).subscribe(
      response => {
        const key = 'valor';
        this.respuesta = new Respuesta('Cancelado!', response[key], true);
        this.respuestaService.emite(this.respuesta);
        this.alquilerEliminado.emit(true);
      }
      );
  }

}
