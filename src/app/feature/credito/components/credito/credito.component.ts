import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  public credito;
  constructor(formBuilder: FormBuilder) { 
    this.credito = formBuilder.group({
      tipoIdentificacion: [''],
      numeroIdentificacion: [''],
      ingresosMensuales: [''],
      egresosMensauales: [''],
      plazo: [''],
    });

  }

  ngOnInit() {
  }

}
