/* import { Alquiler } from '@alquiler/shared/model/alquiler';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Respuesta } from '@shared/components/respuesta/model/respuesta';
import { of } from 'rxjs';

import { ListarAlquilerComponent } from './listar-alquiler.component';

describe('ListarAlquilerComponent', () => {
  let component: ListarAlquilerComponent;
  let fixture: ComponentFixture<ListarAlquilerComponent>;
  let alquilerService: AlquilerService;
  const alquileres = [
    new Alquiler(1, '12345', '2021-05-10 10:11:00', '2021-05-10', '06:00', '08:00', 180000),
    new Alquiler(2, '12345', '2021-05-10 11:00:00', '2021-05-10', '08:00', '10:00', 270000)
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAlquilerComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [AlquilerService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlquilerComponent);
    alquilerService = TestBed.inject(AlquilerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamarse el servicio que lista los registros de alquiler', () => {
    // Arrange
    const spy = spyOn(alquilerService, 'listar').and.returnValue(
      of([])
    );
    // Act
    component.ngOnInit();
    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('debería listar correctamente los registros de alquiler', () => {
    // Arrange
    spyOn(alquilerService, 'listar').and.returnValue(
      of(alquileres)
    );
    // Act
    component.listarAlquileres();
    // Assert
    expect(component.alquileres).toBe(alquileres);
  });

  it('debería listarse alquiler y retornar un mensaje sobre aplicacion de descuento', () => {
    // Arrange
    spyOn(alquilerService, 'listar').and.returnValue(
      of([])
    );
    const respuesta = new Respuesta('Opss...', 'Sin resultados.', false);
    // Act
    component.listarAlquileres();
    // Assert
    expect(component.respuesta).toEqual(respuesta);
  });

});
*/