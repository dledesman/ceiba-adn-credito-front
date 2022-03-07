import { by, element, browser } from 'protractor';

export class CreditoPage {
    
    private linkCrearCredito = element(by.id('linkCrearCredito'));
    private linkListarCreditos = element(by.id('linkListarCredito'));
    private tablaCreditos = element.all(by.id('tablaCreditos'));
    private botonGuardar = element.all(by.id('botonGuardar'));

    private selectTipoIdentificacion = element(by.id('tipoIdentificacion'));
    private inputNumeroIdentificacion = element(by.id('numeroIdentificacion'));
    private inputIngresoMensual = element(by.id('ingresoMensual'));
    private inputEgresoMensual = element(by.id('egresoMensual'));
    private selectPlazo = element(by.id('plazo'));


    async clickBotonCrearCreditos() {
        await this.linkCrearCredito.click();
    }

    async clickBotonListarCreditos() {
        await this.linkListarCreditos.click();
    }

    async seleccionarTipoIdentificacion(tipoIdentificacion) {
        await this.selectTipoIdentificacion.sendKeys(tipoIdentificacion);
    }

    async ingresarNumeroIdentificacion(numeroIdentificacion) {
        await this.inputNumeroIdentificacion.sendKeys(numeroIdentificacion);
    }

    async ingresarIngresoMensual(ingresoMensual) {
        await this.inputIngresoMensual.sendKeys(ingresoMensual);
    }

    async ingresarEgresoMensual(egresoMensual) {
        await this.inputEgresoMensual.sendKeys(egresoMensual);
    }

    async seleccionarPlazo(plazo) {
        await this.selectPlazo.sendKeys(plazo);
    }
 
    async botonGuardarClic() {
        await this.botonGuardar.click();
    }

    async botonGuardarEstado() {
        return this.botonGuardar.isEnabled();
    }

    async contarCreditos() {
        return (await this.tablaCreditos).length;
    }

    getTitleCrearCredito() {
        return element(by.css('app-crear-credito h2')).getText() as Promise<string>;
    }

    getTitleListarCredito() {
        return element(by.css('app-listar-credito h2')).getText() as Promise<string>;
    }

    sleep(tiempoMilisegundos: number){ 
        browser.sleep(tiempoMilisegundos);
    }
}
