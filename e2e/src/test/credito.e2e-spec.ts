import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CreditoPage } from '../page/credito/credito.po';

describe('workspace-project Credito', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let credito: CreditoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        credito = new CreditoPage();
    });


    it('Deberia ingresar a la opción de crear crédito', () => {
        page.navigateTo();
        navBar.clickBotonCreditos();
        credito.clickBotonCrearCreditos();
        expect(credito.getTitleCrearCredito()).toContain('solicitud');
    });

    it('Botón guardar debería estar deshabilitado', () => {
        page.navigateTo();
        navBar.clickBotonCreditos();
        credito.clickBotonCrearCreditos();
        expect(credito.botonGuardarEstado()).toBeFalse;
    });

    it('Botón guardar debería estar habilitado', () => {
        const TIPO_IDENTIFICACION = 'C';
        const NUMERO_IDENTIFICACION = '0201200185';
        const INGRESO_MENSUAL =1500;
        const EGRESO_MENSUAL = 986;
        const PLAZO = "12";

        page.navigateTo();
        navBar.clickBotonCreditos();
        credito.clickBotonCrearCreditos();
        credito.seleccionarTipoIdentificacion(TIPO_IDENTIFICACION);
        credito.ingresarNumeroIdentificacion(NUMERO_IDENTIFICACION);
        credito.ingresarIngresoMensual(INGRESO_MENSUAL);
        credito.ingresarEgresoMensual(EGRESO_MENSUAL);
        credito.seleccionarPlazo(PLAZO);
        expect(credito.botonGuardarEstado()).toBeTrue;

    });

    it('Debría crear un crédito', () => {
        const TIPO_IDENTIFICACION = 'C';
        const NUMERO_IDENTIFICACION = '0201200185';
        const INGRESO_MENSUAL =1500;
        const EGRESO_MENSUAL = 986;
        const PLAZO = "12";

        page.navigateTo();
        navBar.clickBotonCreditos();
        credito.clickBotonCrearCreditos();
        credito.seleccionarTipoIdentificacion(TIPO_IDENTIFICACION);
        credito.ingresarNumeroIdentificacion(NUMERO_IDENTIFICACION);
        credito.ingresarIngresoMensual(INGRESO_MENSUAL);
        credito.ingresarEgresoMensual(EGRESO_MENSUAL);
        credito.seleccionarPlazo(PLAZO);
        credito.botonGuardarClic();

    });

    it('Deberia ingresar a la opción de listar créditos', () => {
        page.navigateTo();
        navBar.clickBotonCreditos();
        credito.clickBotonListarCreditos();
        expect(credito.getTitleListarCredito()).toContain('Lista');
    });

});
