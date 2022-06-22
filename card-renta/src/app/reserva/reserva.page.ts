import { Component, OnInit } from '@angular/core';
import { CardServicesService } from '../card-services.service';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  reservas;
  accesoAuto;
  estado = 'all';
  sumaTotal = 0;
  constructor(public servicio: CardServicesService, private menuCtrl: MenuController, public toastCtrl: ToastController, public router: Router) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }


  ionViewWillEnter(){
    this.listadoReserva();
   
  }
  listadoReserva(){

    this.sumaTotal = 0;
    if(localStorage.getItem('acceso') == 'Cliente'){
      this.accesoAuto = false;
      
      this.servicio.getListReservasCliente(this.estado, localStorage.getItem('persona')).subscribe(res => {

         this.reservas = res['reservas'];
         for(let reserva of this.reservas){
          this.sumaTotal = this.sumaTotal  + Number(reserva.res_monto_pagar);
         }

      })
     
    }else{
  
      
      this.accesoAuto = true;
       this.servicio.getListReservasEmpresa(this.estado, localStorage.getItem('persona')).subscribe(res => {
        console.log(res);
        
       this.reservas = res['reservas'];
       for(let reserva of this.reservas){
        this.sumaTotal = this.sumaTotal  + Number(reserva.res_monto_pagar);
       }
    })
    }
  
   
  }

  pagar(item){

      const data = {
         res_auto:item.res_auto,
         res_persona: item.res_persona,
         res_monto_pagar: item.aut_costo_alquiler,
         res_fecha: item.res_fecha,
         res_estado: 'pagado',
         res_auto_persona: item.res_auto_persona
      }

      this.servicio.putReserva(data, item.res_codigo).subscribe(res => {
       
         const dataAuto = {
          aut_descripcion: item.aut_descripcion,
          aut_marca: item.aut_marca,
          aut_ano: item.aut_ano,
          aut_kilometraje: item.aut_kilometraje,
          aut_costo_alquiler: item.res_monto_pagar,
          aut_estado: 'disponible'
          
        }
    
        this.servicio.putAuto(dataAuto, item.res_auto).subscribe(res => {
           this.presentToast('La reserva de auto fue pagada');
            this.listadoReserva();
        });
       
     


      }) 
    
  }

  detalle(item){
 
    this.router.navigate(['/cliente',item.res_persona]);
  }


  async presentToast(mensaje:string){

    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });

    toast.present();
  }

  handleChange(e) {
   this.estado = e.detail.value;
   this.listadoReserva();
  }
}
