import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreaditoRoutingModule } from './credito-routing.module';
import { CrearCreditoComponent } from './components/crear-credito/crear-credito.component';
import { ListarCreditoComponent } from './components/listar-credito/listar-credito.component';
import { CreditoComponent } from './components/credito/credito.component';
import { SharedModule } from '@shared/shared.module';
import { AlertaComponent } from '@shared/directivas/error-campos/componente/alerta/alerta.component';

@NgModule({
  declarations: [
    CrearCreditoComponent,
    ListarCreditoComponent,
    CreditoComponent,
    AlertaComponent
  ],
  imports: [
    CreaditoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: []
})
export class CreditoModule { }
