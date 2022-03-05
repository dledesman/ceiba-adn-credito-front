import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CreditoService } from '../../shared/service/credito.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearCreditoComponent } from './crear-credito.component';

describe('CrearCreditoComponent', () => {
 
  let component: CrearCreditoComponent;
  let fixture: ComponentFixture<CrearCreditoComponent>;
  let creditoService: CreditoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCreditoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CreditoService, HttpService],
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCreditoComponent);
    component = fixture.componentInstance;
    creditoService = TestBed.inject(CreditoService);
    spyOn(creditoService, 'guardar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.credito.valid).toBeFalsy();
  });

  it('Registrando credito', () => {
    expect(component.credito.valid).toBeFalsy();
    component.credito.controls.tipoIdentificacion.setValue('C');
    component.credito.controls.numeroIdentificacion.setValue('0201255');
    //component.credito.controls.fechaSolicitud.setValue('02/03/2022');
    component.credito.controls.ingresoMensual.setValue(2500);
    component.credito.controls.egresoMensual.setValue(2000);
    component.credito.controls.tasaCambio.setValue(3984);
    component.credito.controls.codigoMoneda.setValue("USD");
    component.credito.controls.plazo.setValue(12);
    expect(component.credito.valid).toBeTruthy();
    //component.guardar();
  });
 
});
