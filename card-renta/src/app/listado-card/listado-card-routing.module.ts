import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoCardPage } from './listado-card.page';
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ListadoCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PipesModule],
  exports: [RouterModule],
})
export class ListadoCardPageRoutingModule {}
