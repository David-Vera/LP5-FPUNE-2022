import { Component, OnInit } from '@angular/core';
import { CardServicesService } from '../card-services.service';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre;
  correo;
  telefono;
  direccion;
  cuenta;
  constructor(public servicio: CardServicesService, public toastCtrl: ToastController, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.servicio.getByIdPersona(localStorage.getItem('persona')).subscribe(res => {

      this.nombre = res['persona'].per_nombre;
      this.correo = res['persona'].per_correo;
      this.telefono = res['persona'].per_telefono;
      this.direccion = res['persona'].per_direccion;
      this.cuenta = res['persona'].per_nivel;
    });
  }


  actualizar(){
      const data = {
        per_nivel: this.cuenta,
        per_correo: this.correo,
        per_direccion: this.direccion,
        per_nombre: this.nombre,
        per_telefono: this.telefono
      }

      this.servicio.putPersona(data, localStorage.getItem('persona')).subscribe(res => {
          this.presentToast('Actualizado datos del perfil');
      })
  }

  async presentToast(mensaje:string){

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });

    toast.present();
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }
}
