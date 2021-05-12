export class Alquiler{
    id: number;
    documento: string;
    fechaSolicitud: string;
    fechaAlquiler: string;
    horaInicio: string;
    horaFin: string;
    valorPagado: number;

    constructor(id: number, documento: string, fechaSolicitud: string,
                fechaAlquiler: string, horaInicio: string, horaFin: string,
                valorPagado: number){
            this.id = id;
            this.documento = documento;
            this.fechaSolicitud = fechaSolicitud;
            this.fechaAlquiler = fechaAlquiler;
            this.horaInicio = horaInicio;
            this.horaFin = horaFin;
            this.valorPagado = valorPagado;

    }
}
