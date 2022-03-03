import { Component, OnInit } from '@angular/core';
import { Credito } from '../../shared/model/credito';
import { CreditoListarService } from '../../shared/service/credito-listar.service';

@Component({
  selector: 'app-listar-credito',
  templateUrl: './listar-credito.component.html',
  styleUrls: ['./listar-credito.component.css']
})
export class ListarCreditoComponent implements OnInit {
  listaCreditos: Credito [] = [];
  constructor(private creditoListarService: CreditoListarService){
    
   }

   
  ngOnInit(): void {
      this.creditoListarService.obtenerCreditos().subscribe(credito => this.listaCreditos = credito);
  }

}
