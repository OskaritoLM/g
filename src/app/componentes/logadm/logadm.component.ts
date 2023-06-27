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

  constructor(private authService: AuthService, private router: Router) { }

  verificarCredenciales() {
    if (this.usuario === 'oscar@cprueba.com' && this.contrasena === 'linux') {
      // Redirigir al usuario a la ruta /admin
      this.router.navigate(['/admin']);
    } else {
      // Poner una mamada no se x 
    }
  }
}

