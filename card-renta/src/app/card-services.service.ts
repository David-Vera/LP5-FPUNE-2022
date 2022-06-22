import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CardServicesService {

  constructor(private http: HttpClient) { }

  //Autos
  getListAutos = () => {
    return this.http.get(environment.url + 'autos');
  }

  getListAutosId = (id) => {
    return this.http.get(environment.url + 'autos/' +id);
  }


  postAutos = (data) => {
    return this.http.post(environment.url + 'auto', data);
  }

  getByIdAuto = (id) => {
    return this.http.get(environment.url + 'auto/' +id );
  }

  putAuto = (data, id) => {
    return this.http.put(environment.url + 'auto/' +id, data);
  }


  //Cuenta
  postCuenta = (data) => {
    return this.http.post(environment.url + 'persona', data);
  }

  postIngreso = (correo, pass) =>{
    const data = {
      correo,
      pass
    }
    return this.http.post(environment.url + 'personaIngreso', data);
  }

  getByIdPersona = (id) => {
    return this.http.get(environment.url + 'persona/' +id);
  }

  putPersona = (data, id) => {
    return this.http.put(environment.url + 'persona/' +id, data);
  }


  //Reserva
  postReserva = (data) => {
    return this.http.post(environment.url + 'reserva', data);
  } 

  getListReservasCliente = (estado, id) => {
    return this.http.get(environment.url + 'reservas-cliente/' +estado+'/'+id);
  }

  getListReservasEmpresa = (estado, id) => {
    return this.http.get(environment.url + 'reservas-empresa/' +estado+'/'+id);
  }

  putReserva = (data, id) => {
    return this.http.put(environment.url + 'reserva/' +id, data);
  }
 
}
