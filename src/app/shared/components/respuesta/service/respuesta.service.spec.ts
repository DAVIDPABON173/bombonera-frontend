import { TestBed } from '@angular/core/testing';
import { Respuesta } from '../model/respuesta';

import { RespuestaService } from './respuesta.service';

describe('RespuestaService', () => {
  let service: RespuestaService;
  let respuesta: Respuesta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestaService);
  });

  it('debería crear el servicio', () => {
    // Arrange - Act
    const respuestaService: RespuestaService = TestBed.inject(RespuestaService);
    // Assert
    expect(respuestaService).toBeTruthy();
  });

  it('Debería emitir una respuesta', () => {
    respuesta = new Respuesta('', '', true);
    service.emite(respuesta);
    service.escucha().subscribe(msj => {
        expect(msj).toEqual(respuesta);
    });
  });

});
