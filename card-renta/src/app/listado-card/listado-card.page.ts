import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-card',
  templateUrl: './listado-card.page.html',
  styleUrls: ['./listado-card.page.scss'],
})
export class ListadoCardPage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }


  agregar(){
    this.router.navigate(['/carga-card']);
  }
}
