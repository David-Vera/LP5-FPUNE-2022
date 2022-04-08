import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoCardPage } from './listado-card.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoCardPageRoutingModule {}
