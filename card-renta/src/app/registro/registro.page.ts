import { Component, OnInit } from '@angular/core';
import { CardServicesService } from '../card-services.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre;
  correo;
  password;
  password2;
  nivel;

  constructor(public servicio: CardServicesService,
              public toastCtrl: ToastController,
              public router: Router) { }

  ngOnInit() {
  }

  crearCuenta(){

    var igualdad = this.password.localeCompare(this.password2);
    if(igualdad == 0){
      const dataCuenta = {
        per_nombre: this.nombre,
        per_correo: this.correo,
        per_password: this.password,
        per_nivel: this.nivel
      };

      this.servicio.postCuenta(dataCuenta).subscribe(res => {
        this.presentToast('Cuenta registrada');
        this.limpiar();
        this.router.navigate(['/home']);
      });

    }else{
        this.presentToast('Las contraseñas no coinciden');
    }
 
  }


  async presentToast(mensaje:string){

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });

    toast.present();
  }

  limpiar(){
    this.nombre = '';
    this.correo = '';
    this.password = '';
    this.password2 = '';
  }



  handleChange(e) {
    this.nivel = e.detail.value;
  }

}
