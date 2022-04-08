import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoCardPageRoutingModule } from './listado-card-routing.module';

import { ListadoCardPage } from './listado-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoCardPageRoutingModule
  ],
  declarations: [ListadoCardPage]
})
export class ListadoCardPageModule {}
