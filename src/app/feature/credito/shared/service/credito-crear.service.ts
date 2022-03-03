import { Injectable } from '@angular/core';
import { Credito } from '../model/credito';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CreditoCrearService {
  private url = "http://localhost:8083/credito/creditos";
  constructor(private http: HttpService) { }

  calcularCredito() {    
    
  }

  guardarCredito(credito: Credito ) {
    console.log("guardar: servicio")
    console.log(credito);
    this.http.doPost<Credito, Number>(this.url,credito);
  }

  
}
