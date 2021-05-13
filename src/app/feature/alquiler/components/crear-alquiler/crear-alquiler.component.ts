import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Respuesta } from '@shared/components/respuesta/model/respuesta';
import { RespuestaService } from '@shared/components/respuesta/service/respuesta.service';

const LONGITUD_MINIMA_PERMITIDA_DOCUMENTO = 5;
@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html'
})
export class CrearAlquilerComponent implements OnInit {

  constructor(private alquilerService: AlquilerService, private respuestaService: RespuestaService) { }

  alquilerForm: FormGroup;
  respuesta: Respuesta;

  ngOnInit(): void {
    this.construirForm();

  }

  crearAlquiler(){
    this.alquilerService.crear(this.alquilerForm.value)
    .subscribe(
      success => {
        const key = 'valor';
        const numero = success[key];
        this.respuesta = new Respuesta('Registro exitoso!', `Alquiler Número: ${numero}` , true);
        this.respuestaService.emite(this.respuesta);
      },
      error => {
        this.respuesta = new Respuesta('Opss...', error.error.mensaje, false);
        this.respuestaService.emite(this.respuesta);
      }
    );
  }

  private construirForm(): void{
    this.alquilerForm = new FormGroup({
      documento: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_DOCUMENTO)
      ] ),
      fechaAlquiler: new FormControl('', [Validators.required]),
      horaInicio: new FormControl('', [Validators.required]),
      horaFin: new FormControl('', [Validators.required])
    });
  }

}
