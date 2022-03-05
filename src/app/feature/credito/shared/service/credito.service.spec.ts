/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from 'src/app/core/services/http.service';
//import { HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { CreditoService } from './credito.service';
import { Credito } from 'src/app/feature/credito/shared/model/credito';

describe('Service: Credito', () => {
  let httpMock: HttpTestingController;
  let service: CreditoService;
  const endPointCredito = `${environment.endpointCredito}/creditos`;
  /* Configuración innicial de la prueba*/
  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreditoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CreditoService);
  });

  it('Debería crear una instancia del servicio', () => {
    const creditoService: CreditoService = TestBed.inject(CreditoService);
    expect(creditoService).toBeTruthy();
  });

  it('deberia listar creditos registrados', () => {
    const dummyCreditos = [
      new Credito(1, 'C','02012',new Date,1500,950,"USD",3986,12), 
      new Credito(2, 'C','02013',new Date,2500,2100,"USD",3986,12)];
    service.consultar().subscribe(creditos => {
      expect(creditos.length).toBe(2);
      expect(creditos).toEqual(dummyCreditos);
    });
    const req = httpMock.expectOne(endPointCredito);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCreditos);
  });

  it('deberia crear un producto', () => {
    const dummyCredito = new Credito(2, 'C','02013',new Date,2500,2100,"USD",3986,12);
    service.guardar(dummyCredito)
    
  });

});
