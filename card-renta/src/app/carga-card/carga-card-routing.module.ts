import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaCardPage } from './carga-card.page';

const routes: Routes = [
  {
    path: '',
    component: CargaCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaCardPageRoutingModule {}
