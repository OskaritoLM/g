import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  errorInicioSesion: string = '';
  isLoggedIn: boolean = false; // Inicializar en falso

  constructor(private authService: AuthService, private router: Router){}

  verificarCredenciales() {
    if (this.usuario === 'cliente@gmail.com' && this.contrasena === 'linux') {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    } else {
      this.errorInicioSesion = 'Tú no eres el admin >:p';
    }
  }
}