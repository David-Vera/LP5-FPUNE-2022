import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardServicesService } from '../card-services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  correo;
  password;
  constructor(private router: Router,
              public servicio: CardServicesService,
              private toastCtrl: ToastController) {}

  ingresar(){

    if(this.correo != null && this.password != null && this.correo != 'undefined' && this.password != 'undefined'){
      this.servicio.postIngreso(this.correo, this.password).subscribe(res => {
         this.router.navigate(['/listado-card']);
         localStorage.setItem('persona', res['personaIngresar'].per_codigo);
         this.presentToast('Ingreso a la app con éxito');
      })
    }else{
        this.presentToast('Debe ingresar correo y password');
    }
  }
    
  

  recuperarPassword(){
    this.router.navigate(['/recuperar-password'])
  }

  registro(){
    this.router.navigate(['/registro'])
  }

  async presentToast(mensaje:string){

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });

    toast.present();
  }

}
