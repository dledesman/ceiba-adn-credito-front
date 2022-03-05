import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Credito } from 'src/app/feature/credito/shared/model/credito';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  constructor(private http: HttpService) { }

  public  consultar() {  
    return this.http.doGet<Credito[]>(`${environment.endpointCredito}/creditos`, this.http.optsName('consultar creditos'));
  }

  public guardar(credito: Credito ) {
    console.log("guardar: servicio")
    console.log(credito);
    this.http.doPost<Credito, Number>(`${environment.endpointCredito}/creditos`, credito);
  }

}
