import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plazo } from './../../shared/model/plazo';
import { Documento } from './../../shared/model/documento';
import { CreditoService } from './../../shared/service/credito.service';
import { Credito } from '../../shared/model/credito';

@Component({
  selector: 'app-crear-credito',
  templateUrl: './crear-credito.component.html',
  styleUrls: ['./crear-credito.component.css']
})
export class CrearCreditoComponent implements OnInit {
  plazos: Plazo [] = [new Plazo('3','Tres'), 
                      new Plazo('6','Seis'), 
                      new Plazo('12','Doce')];
  documentos: Documento [] = [new Documento('C','Cedula'), 
                        new Documento('P','Pasaporte'), 
                        new Documento('O','Otro')];
  submitted=false;
  private creditoIngresado: Credito;
  public credito: FormGroup;

  constructor(private creditoService: CreditoService, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.credito = this.formBuilder.group({
      tipoIdentificacion: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      ingresoMensual: ['', Validators.required],
      egresoMensual: ['', Validators.required],
      codigoMoneda: [''],
      tasaCambio: [''],
      plazo: ['', Validators.required]
    });
  }

  guardar() {
    this.asignarValoresIngresados();
    this.creditoService.guardar(this.creditoIngresado);
  }

  private asignarValoresIngresados() {
    this.creditoIngresado.tipoIdentificacion = this.credito.get('tipoIdentificacion').value;
    this.creditoIngresado.numeroIdentificacion = this.credito.get('numeroIdentificacion').value;
    this.creditoIngresado.ingresoMensual = this.credito.get('ingresoMensual').value;
    this.creditoIngresado.egresoMensual = this.credito.get('egresoMensual').value;
    this.creditoIngresado.plazo = this.credito.get('plazo').value;
    this.creditoIngresado.codigoMoneda='USD';
    this.creditoIngresado.tasaCambio=3982.12;

  }

}
