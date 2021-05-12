export class Respuesta {
    encabezado: string;
    cuerpo: string;
    estado: boolean;

    constructor(encabezado: string = '', cuerpo: string = '', estado: boolean = false) {
      this.encabezado = encabezado;
      this.cuerpo = cuerpo;
      this.estado = estado;
    }
  }
