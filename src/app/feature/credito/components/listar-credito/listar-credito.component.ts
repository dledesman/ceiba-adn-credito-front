import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Credito } from '../../shared/model/credito';
import { CreditoService } from '../../shared/service/credito.service';

@Component({
  selector: 'app-listar-credito',
  templateUrl: './listar-credito.component.html',
  styleUrls: ['./listar-credito.component.css']
})
export class ListarCreditoComponent implements OnInit {
  listaCreditos: Observable<Credito[]>
  constructor(private creditoService: CreditoService){
    
   }

   
  ngOnInit(): void {
    this.listaCreditos = this.creditoService.consultar();
  }

}
