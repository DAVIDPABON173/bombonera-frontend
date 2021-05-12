import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';

import { AlquilerService } from './alquiler.service';
import { HttpService } from '@core/services/http.service';
import { Alquiler } from '../model/alquiler';

describe('AlquilerService', () => {
  let httpMock: HttpTestingController;
  let service: AlquilerService;
  const ENDPOINT_ALQUILER = `${environment.endpoint}/alquiler`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlquilerService, HttpService]
     });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AlquilerService);
  });

  it('debería crear el servicio', () => {
    // Arrange - Act
    const alquilerService: AlquilerService = TestBed.inject(AlquilerService);
    // Assert
    expect(alquilerService).toBeTruthy();
  });
  it('debería listar todos los registros de alquiler', () => {
    // Arrange
    const dummyAlquileres = [
      new Alquiler(1, '12345', '2021-05-10 10:11:00', '2021-05-10', '06:00', '08:00', 180000),
      new Alquiler(2, '12345', '2021-05-10 11:00:00', '2021-05-10', '08:00', '10:00', 270000)
    ];

    service.listar().subscribe(response => {
      expect(response.length).toBe(2);
      expect(response).toEqual(dummyAlquileres);
    });
    const req = httpMock.expectOne(ENDPOINT_ALQUILER);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAlquileres);
  });

  it('debería crear un alquiler', () => {
    // Arrange
    const dummyAlquiler = new Alquiler(1, '12345', '2021-05-10 10:11:00', '2021-05-10', '06:00', '08:00', 0);
    const dummyResponse = { valor: 1 };

    // Act
    service.crear(dummyAlquiler).subscribe((success) => {
    // Assert
    expect(success).toEqual(dummyResponse);
    });
    const request = httpMock.expectOne(ENDPOINT_ALQUILER);
    // Assert
    expect(request.request.method).toBe('POST');
    expect(request.request.responseType).toBe('json');
    request.event(new HttpResponse<any>({ body: dummyResponse }));

  });

  it('debería cancelar un alquiler', () => {
    const dummyAlquiler = new  Alquiler(1, '12345', '2021-05-10 10:11:00', '2021-05-10', '06:00', '08:00', 180000);
    const dummyResponse = { valor: 'Cancelación exitosa!.' };
    service.cancelar(dummyAlquiler).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyResponse);
    });
    const dummyId = 1;
    const req = httpMock.expectOne(`${ENDPOINT_ALQUILER}/${dummyId}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<object>({ body: dummyResponse }));
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

});
