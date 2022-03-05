import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plazo } from './../../shared/model/plazo';
import { Documento } from './../../shared/model/documento';
import { CreditoService } from './../../shared/service/credito.service';
import { Router } from '@angular/router';

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
  public credito: FormGroup;
  constructor(private creditoService: CreditoService, 
      private formBuilder: FormBuilder,
      private router: Router) { 
    
  }

  ngOnInit() {
    this.crearFormulario();
  }

  public guardar() {
    this.credito.get('codigoMoneda').setValue('USD');
    this.credito.get('tasaCambio').setValue(3982.12);
    this.creditoService.guardar(this.credito.value);
    this.credito.reset;
    this.router.navigate(['listar']);
  }

  private crearFormulario() {
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
}
