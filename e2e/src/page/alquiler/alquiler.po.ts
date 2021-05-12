import { by, element } from 'protractor';

export class AlquilerPage{

    private linkCrearAlquiler = element(by.id('linkPageCrearAlquiler'));
    private linkListarAlquiler = 
    element(by.id('linkPageListarAlquiler'));

    //private listaAlquileres = element.all(by.xpath('/html/body/app-root/app-alquiler/app-listar-alquiler/div/div/div/div/table/tbody/tr'));
    private listaAlquileres = element.all(by.css('app-listar-alquiler table.tbody.tr'));
    
    private botonEliminarPrimerAlquiler = element(by.xpath(
        '/html/body/app-root/app-alquiler/app-listar-alquiler/div/div/div/div/table/tbody/tr[1]/td/app-eliminar-alquiler/button'
        ));
        

    private inputDocumento = element(by.id('documento'));
    private inputFechaAlquiler = element(by.id('fechaAlquiler'));
    private inputHoraInicio = element(by.id('horaInicio'));
    private inputHoraFin = element(by.id('horaFin'));
    private btnCrearAlquiler = element(by.id('btnCrearAlquiler'));

    async clickIrACrearAlquiler(){
        await this.linkCrearAlquiler.click();
    }

    async clickLinkIrAListarAlquiler(){
        await this.linkListarAlquiler.click();
    }

    async contarElementosListaAlquiler(){
        return await this.listaAlquileres.count();
    }

    async ingresarDocumento(documento: string = '') {
        await this.inputDocumento.sendKeys(documento);
    }

    async ingresarFechaAlquiler(fechaAlquiler: string = ''){
        await this.inputFechaAlquiler.sendKeys(fechaAlquiler);
    }

    async ingresarHoraInicio(horaInicio: string = ''){
        await this.inputHoraInicio.sendKeys(horaInicio);
    }

    async ingresarHoraFin(horaFin: string = ''){
        await this.inputHoraFin.sendKeys(horaFin);
    }

    async inicializarCrearAlquiler(documento: string = '', fechaAlquiler: string = '', 
        horaInicio: string = '', horaFin: string = ''){
        await this.ingresarDocumento(documento);
        await this.ingresarFechaAlquiler(fechaAlquiler);
        await this.ingresarHoraInicio(horaInicio);
        await this.ingresarHoraFin(horaFin);
    }

    async clickBotonCrearAlquiler() {
        await this.btnCrearAlquiler.click();
    }

    async estaHabilitadoBotonCrearAlquiler() {
        return await this.btnCrearAlquiler.isEnabled();
    }

    async clickBotonCancelarAlquiler() {
        await this.botonEliminarPrimerAlquiler.click();
    }

}