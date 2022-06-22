import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardServicesService } from '../card-services.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  nombre;
  correo;
  telefono;
  direccion;
  cuenta;
  constructor(private param: ActivatedRoute, private servicio: CardServicesService) { }

  ngOnInit() {
    this.param.params.subscribe((params: Params) => {
     
      this.servicio.getByIdPersona( params.id ).subscribe(res => {

        this.nombre = res['persona'].per_nombre;
        this.correo = res['persona'].per_correo;
        this.telefono = res['persona'].per_telefono;
        this.direccion = res['persona'].per_direccion;
        this.cuenta = res['persona'].per_nivel;
      });
  });
  }

}
