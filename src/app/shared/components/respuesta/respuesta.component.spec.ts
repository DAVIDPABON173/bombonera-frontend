import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RespuestaComponent } from './respuesta.component';

describe('RespuestaComponent', () => {
  let component: RespuestaComponent;
  let fixture: ComponentFixture<RespuestaComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    component.respuesta.encabezado = 'encabezado';
    component.respuesta.cuerpo = 'cuerpo';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el encabezado de la respuesta', () => {
    const element: HTMLElement = fixture.debugElement.query( By.css('h5') ).nativeElement;
    expect( element.innerHTML ).toEqual('encabezado');
  });

  it('debería mostrar el cuerpo de la respuesta', () => {
    const element: HTMLElement = fixture.debugElement.query( By.css('p') ).nativeElement;
    expect( element.innerHTML ).toEqual('cuerpo');
  });

});
