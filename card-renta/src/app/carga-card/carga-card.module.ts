import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaCardPageRoutingModule } from './carga-card-routing.module';

import { CargaCardPage } from './carga-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaCardPageRoutingModule
  ],
  declarations: [CargaCardPage]
})
export class CargaCardPageModule {}
