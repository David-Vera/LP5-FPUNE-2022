import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CardServicesService } from '../card-services.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-carga-card',
  templateUrl: './carga-card.page.html',
  styleUrls: ['./carga-card.page.scss'],
})
export class CargaCardPage implements OnInit {

  descripcion;
  marca;
  ano;
  Kilometraje;
  costo;
  latitud;
  longitud;
  codigo;
  boton;
  constructor(public servicio: CardServicesService, 
              public toastCtrl: ToastController,
              public router: Router,
              private param: ActivatedRoute) { }

  ngOnInit() {
    this.param.params.subscribe((params: Params) => {
        if(params.id == 0){
          this.boton = 'Registrar';
        }else{
          this.boton = 'Actualizar';
          this.datoAuto(params.id);
        }
    });
  }
 
  datoAuto(id){
    this.servicio.getByIdAuto(id).subscribe(res => {
         this.descripcion = res['auto'].aut_descripcion;
         this.marca = res['auto'].aut_marca;
         this.ano = res['auto'].aut_ano;
         this.Kilometraje = res['auto'].aut_kilometraje;
         this.costo = res['auto'].aut_costo_alquiler;
         this.latitud = res['auto'].aut_latitud;
         this.longitud = res['auto'].aut_longitud;
         this.codigo =  res['auto'].aut_codigo;
    });
  }

  guardar(){
    const dataAuto = {
      aut_descripcion: this.descripcion,
      aut_marca: this.marca,
      aut_latitud: this.latitud,
      aut_longitud: this.longitud,
      aut_ano: this.ano,
      aut_kilometraje: this.Kilometraje,
      aut_costo_alquiler: this.costo,
      aut_estado: 'disponible'
    }

    if(this.codigo){
      this.servicio.putAuto(dataAuto, this.codigo).subscribe(res => {
        this.presentToast('Actualizados datos del auto');
        this.router.navigate(['/listado-card']);
       });
    }else{
      this.servicio.postAutos(dataAuto).subscribe(res => {
        this.presentToast('Auto disponible para la reserva');
        this.router.navigate(['/listado-card']);
       });
    }

   
  }

  async presentToast(mensaje:string){

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });

    toast.present();
  }

}
