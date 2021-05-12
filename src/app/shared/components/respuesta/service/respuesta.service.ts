import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Respuesta } from '../model/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private respuesta: BehaviorSubject<Respuesta> = new BehaviorSubject({
    encabezado: '',
    cuerpo: '',
    estado: false
  });

  constructor() { }

  public escucha(): Observable<Respuesta> {
    return this.respuesta.asObservable();
  }

  public emite(msj: Respuesta): void {
      this.respuesta.next(msj);
  }

}
