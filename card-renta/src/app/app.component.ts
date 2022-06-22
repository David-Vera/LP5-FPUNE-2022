import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  
  onCerrarSesion() {
    localStorage.removeItem('persona');
    localStorage.removeItem('acceso');
    this.router.navigate(['/home']);

  }
}
