import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlquilerComponent } from './crear-alquiler.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpService } from '@core/services/http.service';
import { of, throwError } from 'rxjs';
import { Respuesta } from '@shared/components/respuesta/model/respuesta';

describe('CrearAlquilerComponent', () => {
  let component: CrearAlquilerComponent;
  let fixture: ComponentFixture<CrearAlquilerComponent>;
  let alquilerService: AlquilerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlquilerComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [AlquilerService, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlquilerComponent);
    component = fixture.componentInstance;
    alquilerService = TestBed.inject(AlquilerService);
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería ser inválido el formulario cuando esta vacio o incompleto', () => {
    expect(component.alquilerForm.valid).toBeFalsy();
  });

  it('debería ser válido el formulario si esta diligenciado', () => {
    component.alquilerForm.controls.documento.setValue('12345');
    component.alquilerForm.controls.fechaAlquiler.setValue('2021-05-10');
    component.alquilerForm.controls.horaInicio.setValue('06:00');
    component.alquilerForm.controls.horaFin.setValue('08:00');
    expect(component.alquilerForm.valid).toBeTruthy();
  });

  it('debería llamar el servicio que crea el alquiler', () => {
    // Arrange
    const idFake = 1;
    const response = { valor: idFake};
    const spy = spyOn(alquilerService, 'crear').and.returnValue(
      of(response)
    );
    // Act
    component.crearAlquiler();
    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('debería crear un registro de alquiler y retornar su id', () => {
    // Arrange
    const idFake = 1;
    const response = { valor: idFake };
    spyOn(alquilerService, 'crear').and.returnValue(
      of(response)
    );
    const respuesta = new Respuesta('Registro exitoso!', `Alquiler Número: ${idFake}`, true);
    // Act
    component.crearAlquiler();
    // Assert
    expect(component.respuesta).toEqual(respuesta);
  });

  it('debería arrojar un mensaje de error al intentar crear un alquiler', () => {
    // Arrange
    const response = {
      nombreExcepcion: "ExcepcionHorarioNoDisponible",
      mensaje: "El horario de alquiler solicitado no se encuentra disponible."
    };

    const errorWrapper = { error: response };
    spyOn(alquilerService, 'crear').and.callFake(
      () => throwError(errorWrapper)
    );
    const respuesta = new Respuesta(
      'Opss...',
      `${response.mensaje}`,
      false);
    // Act
    component.crearAlquiler();
    // Assert
    expect(component.respuesta).toEqual(respuesta);
  });


});
