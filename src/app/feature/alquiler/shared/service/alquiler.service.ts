import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Alquiler } from '../model/alquiler';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {


  private URL_ALQUILER: string;
  datepipe: DatePipe;

  constructor(protected http: HttpService) {
    this.URL_ALQUILER = '/alquiler';
    this.datepipe = new DatePipe('en-US');
  }

  public listar() {
    return this.http.doGet<Alquiler[]>(`${environment.endpoint}${this.URL_ALQUILER}`, 
    this.http.optsName('listar registros alquiler'));
  }

  public crear(alquiler: Alquiler) {
    let formattedDate = this.datepipe.transform(new Date(), 'YYYY-MM-dd HH:mm:ss')
    console.log("formattedDate: " + formattedDate.toString());
    alquiler.fechaSolicitud = formattedDate.toString();
    return this.http.doPost<Alquiler, boolean>(`${environment.endpoint}${this.URL_ALQUILER}`, alquiler,
                                                this.http.optsName('crear alquiler'));
  }

  public cancelar(alquiler_id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/alquiler/${alquiler_id}`,
                                                 this.http.optsName('cancelar alquiler'));
  }
}
