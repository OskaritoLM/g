import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa el Router
import { LoginCredentials } from 'src/app/models/login';
import { ClientesService } from 'src/app/services/clientes.service'; // Importa el servicio
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  pass: string = '';
  errorInicioSesion: string = '';

  constructor(private http: HttpClient, private router: Router, private clientesService: ClientesService) {}

  verificarCredenciales(form:NgForm) {
   /* const credentials: LoginCredentials = {
      correo: this.correo,
      pass: this.pass
    };*/

  
    this.clientesService.loginClientes(form.value.correo, form.value.pass).subscribe(
      (res: any) => {
        // Manejar la respuesta exitosa del servidor
        console.log(res);
        if (res.message === 'Autenticación exitosa') {
          this.router.navigate(['/home-user']);
        }
      },
      (err: any) => {
        // Manejar errores
        console.error(err);
        this.errorInicioSesion = 'Datos Incorrectos';
      }
    );
  }
  regresar() {
    this.router.navigate(['/home']);
  }
}  