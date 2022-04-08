import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaPagadaPageRoutingModule } from './reserva-pagada-routing.module';

import { ReservaPagadaPage } from './reserva-pagada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaPagadaPageRoutingModule
  ],
  declarations: [ReservaPagadaPage]
})
export class ReservaPagadaPageModule {}
