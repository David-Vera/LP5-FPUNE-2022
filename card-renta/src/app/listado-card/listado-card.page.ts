import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CardServicesService } from '../card-services.service';

@Component({
  selector: 'app-listado-card',
  templateUrl: './listado-card.page.html',
  styleUrls: ['./listado-card.page.scss'],
})
export class ListadoCardPage implements OnInit {

  autos;
  accesoAuto;
  nombreEditarVisualizar;
  constructor(private menuCtrl: MenuController, private router: Router, public servicio: CardServicesService, public toastCtrl: ToastController) { }

  ngOnInit() {  
  
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }

  ionViewWillEnter(){
    this.listaAuto();
   
  }

  listaAuto(){

    if(localStorage.getItem('acceso') == 'Cliente'){
      this.nombreEditarVisualizar = 'Detalle'
      this.accesoAuto = false;
      this.servicio.getListAutos().subscribe(res => {
        this.autos = res['autolista'];
      })
     
    }else{
      this.nombreEditarVisualizar = 'Editar'
      this.accesoAuto = true;
      this.servicio.getListAutosId(localStorage.getItem('persona')).subscribe(res => {
        this.autos = res['autolista'];
      })
    }
   
  }

  editar(item){
    this.router.navigate(['carga-card', item.aut_codigo])
  }

  reservar(item){
    const data = {
      res_auto:item.aut_codigo,
      res_persona: localStorage.getItem('persona'),
      res_monto_pagar: item.aut_costo_alquiler,
      res_fecha: new Date(),
      res_estado: 'pendiente',
      res_auto_persona: item.aut_persona_id
    }
    this.servicio.postReserva(data).subscribe(res => {
      this.presentToast('Reservado el auto');
      //Actualizar estado de auto
      const dataAuto = {
        aut_descripcion: item.aut_descripcion,
        aut_marca: item.aut_marca,
        aut_latitud: item.aut_latitud,
        aut_longitud: item.aut_longitud,
        aut_ano: item.aut_ano,
        aut_kilometraje: item.aut_kilometraje,
        aut_costo_alquiler: item.aut_costo_alquiler,
        aut_estado: 'reservado'
        
      }
  
      this.servicio.putAuto(dataAuto, item.aut_codigo).subscribe(res => {
        this.listaAuto();
      });
    });
     
  }

  buscar( event ) {

  }

  agregar(){
    this.router.navigate(['/carga-card', 0]);
  }

  async presentToast(mensaje:string){

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });

    toast.present();
  }

}
