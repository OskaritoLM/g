import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logadm',
  templateUrl: './logprov.component.html',
  styleUrls: ['./logprov.component.css']
})
export class LogprovComponent {
  usuario: string = '';
  contrasena: string = '';
  errorInicioSesion: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  verificarCredenciales() {
    if (this.usuario === 'noahp@cprueba.com' && this.contrasena === 'linux') {
      // Redirigir al usuario a la ruta /admin
      this.router.navigate(['/proveedor']);
    } else {
      // Poner una mamada no se x 
      this.errorInicioSesion = 'Usuario o contraseña incorrecta';
    }
  }
}