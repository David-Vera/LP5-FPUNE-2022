import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ingresar(){
    this.router.navigate(['/listado-card'])
  }

  recuperarPassword(){
    this.router.navigate(['/recuperar-password'])
  }

  registro(){
    this.router.navigate(['/registro'])
  }


}
