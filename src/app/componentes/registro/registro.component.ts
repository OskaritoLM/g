import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa el Router
import { ClientesService } from 'src/app/services/clientes.service'; // Importa el servicio
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  nom_cliente: string =''
  correo: string = '';
  direccion: string = '';
  telefono: string = '';
  rfc: string = '';
  pass: string = '';
  errorRegistro: string = '';

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private clientesService: ClientesService
    ) {}

  verificarCredenciales(form:NgForm) {
   /* const credentials: LoginCredentials = {
      correo: this.correo,
      pass: this.pass
    };*/

  
    this.clientesService.registroClientes(form.value.nom_cliente, form.value.correo, form.value.direccion, form.value.telefono, form.value.rfc, form.value.pass).subscribe(
      (res: any) => {
        // Manejar la respuesta exitosa del servidor
        console.log(res);
        if (res.message === 'Usuario registrado exitosamente') {
          alert('Se te redirigirá al inicio de sesión donde deberás ingresar tus datos');
          this.router.navigate(['/login']);
        }
      },
      (err: any) => {
        // Manejar errores
        console.error(err);
        this.errorRegistro = 'Este correo ya esta en uso';
      }
    );
  }
  regresar() {
    // Utilizar window.history.back() para regresar a la página anterior
    this.router.navigate(['/home']);
  }
}  