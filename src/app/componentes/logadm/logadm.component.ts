import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logadm',
  templateUrl: './logadm.component.html',
  styleUrls: ['./logadm.component.css']
})
export class LogadmComponent {
  usuario: string = '';
  contrasena: string = '';
  role: string = '';
  errorInicioSesion: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  verificarCredenciales() {
    this.authService.login(this.usuario, this.contrasena, 'admin');

    if (this.authService.getIsLoggedIn()) {
      this.router.navigate(['/admin']);
    } else {
      this.errorInicioSesion = 'Tú no eres el admin >:p';
    }
  }
}