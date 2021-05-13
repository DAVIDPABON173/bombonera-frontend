/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAlquilerComponent } from './eliminar-alquiler.component';
import {RouterTestingModule} from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { Respuesta } from '@shared/components/respuesta/model/respuesta';

describe('EliminarAlquilerComponent', () => {
  let component: EliminarAlquilerComponent;
  let fixture: ComponentFixture<EliminarAlquilerComponent>;
  let alquilerService: AlquilerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAlquilerComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [AlquilerService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar el servicio que cancelar un alquiler', () => {
    // Arrange
    const mensajeFake = 'Cancelación exitosa!.';
    const response = { valor: mensajeFake};
    const spy = spyOn(alquilerService, 'cancelar').and.returnValue(
      of(response)
    );
    // Act
    component.cancelarAlquiler();
    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('debería cancelar un alquiler y retornar un mensaje sobre aplicacion de descuento', () => {
    // Arrange
    const mensajeFake = 'Cancelación exitosa!.  se aplica devolución del 90% del valor pagado';
    const response = { valor: mensajeFake};
    spyOn(alquilerService, 'cancelar').and.returnValue(
      of(response)
    );
    const respuesta = new Respuesta('Cancelado!', mensajeFake, true);
    // Act
    component.cancelarAlquiler();
    // Assert
    expect(component.respuesta).toEqual(respuesta);
  });




});
*/
