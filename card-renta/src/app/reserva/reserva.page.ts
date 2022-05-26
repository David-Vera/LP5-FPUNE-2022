import { Component, OnInit } from '@angular/core';
import { CardServicesService } from '../card-services.service';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  reservas;

  constructor(public servicio: CardServicesService, private menuCtrl: MenuController, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.listadoReserva();
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }

  listadoReserva(){
    const valor = 'pendiente';
    this.servicio.getListReservas(valor).subscribe(res => {
       this.reservas = res['reservas'];
    })
  }

  pagar(item){
      const data = {
        aut_ano: item.aut_ano,
        aut_descripcion: item.aut_descripcion,
        aut_marca: item.aut_marca,
        res_estado: 'pagado',
        res_fecha: item.res_fecha,
        res_monto_pagar: item.res_monto_pagar,
      }

      this.servicio.putReserva(data, localStorage.getItem('persona')).subscribe(res => {
        this.presentToast('La reserva de auto fue pagada');
        this.listadoReserva();
     })
  }


  async presentToast(mensaje:string){

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });

    toast.present();
  }
}
