import { browser, by, element, ElementFinder } from 'protractor';

export class RespuestaPage {
    private respuesta: ElementFinder;
    async isDisplayed() {
        this.respuesta = element(by.id('respuesta'));
        return await this.respuesta.isDisplayed();
    }

    async getElementDeRespuesta(id: string) {
        const subelement = element(by.id(id));
        return await subelement.getText();
    }
    waitPorRespuesta() {
        browser.wait(browser.ExpectedConditions.visibilityOf(this.respuesta), 1500); // timeout
    }

}
