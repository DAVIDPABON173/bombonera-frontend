import { AppPage } from "../app.po";
import { AlquilerPage } from "../page/alquiler/alquiler.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { RespuestaPage } from "../page/respuesta/respuesta.po";

describe('workspace-project Alquiler', () => {

    let page: AppPage;
    let navBar: NavbarPage;
    let alquiler: AlquilerPage;
    let respuesta: RespuestaPage;


    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        alquiler = new AlquilerPage();
        respuesta = new RespuestaPage();
    });

    it('debería listar los alquileres', async () => {
        await page.navigateTo();
        await navBar.clickBotonAlquiler();
        await alquiler.clickLinkIrAListarAlquiler();
        expect(alquiler.contarElementosListaAlquiler()).toBeGreaterThanOrEqual(0);
    });

    it('debería estar deshabilitado el boton de Registrar alquiler cuando el formulario es invalido', async () => {
        await page.navigateTo();
        await navBar.clickBotonAlquiler();
        await alquiler.clickIrACrearAlquiler();
        await alquiler.inicializarCrearAlquiler();
        expect(alquiler.estaHabilitadoBotonCrearAlquiler()).toBeFalsy();
    });

    it('debería crear un alquiler', async () => {
        await page.navigateTo();
        await navBar.clickBotonAlquiler();
        await alquiler.clickIrACrearAlquiler();
        await alquiler.inicializarCrearAlquiler('555555', '06-05-2021', '15:00', '18:00');
        let habilitado = await alquiler.estaHabilitadoBotonCrearAlquiler();
        expect(habilitado).toBeTruthy();
        await alquiler.clickBotonCrearAlquiler();
        let encabezado = respuesta.getElementDeRespuesta('encabezadoRespuesta');
        expect(encabezado).toContain('Registro exitoso!');
        let cuerpo = respuesta.getElementDeRespuesta('cuerpoRespuesta');
        expect(cuerpo).toContain('Alquiler Número:');
        
    });

    it('debería cancelar un alquiler', async () => {
        await page.navigateTo();
        await navBar.clickBotonAlquiler();
        await alquiler.clickLinkIrAListarAlquiler();
        await alquiler.clickBotonCancelarAlquiler();
        let encabezado = await respuesta.getElementDeRespuesta('encabezadoRespuesta');
        expect(encabezado).toContain('Cancelado!');
    });

});