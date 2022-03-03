import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Credito } from 'src/app/feature/credito/shared/model/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoListarService {
  private url = "http://localhost:8083/credito/creditos";
  listaCreditos: Observable<Credito[]>;

  constructor(private http: HttpService) { 
    
  }

  public  obtenerCreditos(): Observable <Credito []> {  
    this.http.createDefaultOptions();
    return this.listaCreditos = this.http.doGet<Credito[]>(this.url);
  }

}
