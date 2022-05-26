import { Component, OnInit } from '@angular/core';
import { CardServicesService } from '../card-services.service';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reserva-pagada',
  templateUrl: './reserva-pagada.page.html',
  styleUrls: ['./reserva-pagada.page.scss'],
})
export class ReservaPagadaPage implements OnInit {

  reservas;

  constructor(public servicio: CardServicesService, private menuCtrl: MenuController, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.listadoReserva();
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }

  listadoReserva(){
    const valor = 'pagado';
    this.servicio.getListReservas(valor).subscribe(res => {
       this.reservas = res['reservas'];
    })
  }



}
