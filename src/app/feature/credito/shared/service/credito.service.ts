import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Credito } from 'src/app/feature/credito/shared/model/credito';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  resultado: number;
  constructor(private httpService: HttpService) { }

  public  consultar() {  
    return this.httpService.doGet<Credito[]>(`${environment.endpointCredito}/creditos`, this.httpService.optsName('consultar creditos'));
  }

  public guardar(credito: Credito ) {
    return this.httpService.doPost<Credito, boolean>(`${environment.endpointCredito}/creditos`, credito);
  }

}

