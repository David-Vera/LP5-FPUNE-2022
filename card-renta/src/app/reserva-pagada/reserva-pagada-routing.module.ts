import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaPagadaPage } from './reserva-pagada.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaPagadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaPagadaPageRoutingModule {}
