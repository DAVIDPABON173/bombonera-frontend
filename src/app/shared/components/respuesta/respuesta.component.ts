import { Component, OnInit } from '@angular/core';
import { Respuesta } from './model/respuesta';
import { RespuestaService } from './service/respuesta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {


  respuesta: Respuesta;
  classHide: string;
  claseTipoAlerta: string;

  constructor(private respuestaService: RespuestaService) { }


  ngOnInit(): void {
    this.escucharRespuesta();
  }

  private escucharRespuesta() {
    this.respuestaService.escucha().subscribe(resp => {
      this.respuesta = resp;

      this.claseTipoAlerta = this.respuesta.estado ? 'alert-success' : 'alert-danger';

      this.classHide = this.respuesta.encabezado === '' ? 'd-none' : '';
    });
  }

  public ocultarRespuesta() {
      this.classHide = 'd-none';
  }

}
