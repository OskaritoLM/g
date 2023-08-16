import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; // Importa el servicio de autenticación
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-navusr',
  templateUrl: './navusr.component.html',
  styleUrls: ['./navusr.component.css']
})
export class NavusrComponent {
    constructor(private clientesService: ClientesService, private router: Router) {}
    cerrarSesion() {
      this.router.navigate(['/login']); // Ajusta la ruta según tu configuración
    }
  }
