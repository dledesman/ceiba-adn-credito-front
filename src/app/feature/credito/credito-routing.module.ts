import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CreditoComponent } from './components/credito/credito.component';
import { CrearCreditoComponent } from './components/crear-credito/crear-credito.component';
import { ListarCreditoComponent } from './components/listar-credito/listar-credito.component';


const routes: Routes = [
  {
    path: '', component: CreditoComponent,
    children: [
      { path: 'crear', component: CrearCreditoComponent},
      { path: 'listar', component: ListarCreditoComponent}
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreaditoRoutingModule {}
