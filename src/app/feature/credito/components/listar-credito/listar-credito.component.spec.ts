import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarCreditoComponent } from './listar-credito.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CreditoService } from '../../shared/service/credito.service';
import { Credito } from '../../shared/model/credito';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarCreditoComponent', () => {
  
  let component: ListarCreditoComponent;
  let fixture: ComponentFixture<ListarCreditoComponent>;
  let creditoService: CreditoService;
  const listaCreditos: Credito[] = [new Credito(1, 'C','02012',new Date,1500,950,"USD",3986,12), 
            new Credito(2, 'C','02013',new Date,1500,950,"USD",3986,12)];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCreditoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CreditoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCreditoComponent);
    component = fixture.componentInstance;
    creditoService = TestBed.inject(CreditoService);
    spyOn(creditoService, 'consultar').and.returnValue(
      of(listaCreditos)
    );
    fixture.detectChanges();
  });

  it('should retornar una lista', () => {
    expect(component).toBeTruthy();
    component.listaCreditos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
