import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-logadm',
  templateUrl: './logadm.component.html',
  styleUrls: ['./logadm.component.css']
})

export class LogadmComponent {
  correo: string = '';
  clave: string = '';
  errorInicioSesion: string = '';

  constructor(private http: HttpClient, private router: Router, private ususariosService: UsuariosService) {}

  verificarCredenciales(form:NgForm){
    this.ususariosService.loginUsuarios(form.value.correo, form.value.clave).subscribe(
      (res: any) => {
        //Manejador de respuesta para el servidor
        console.log(res);
        if (res.message === 'Autenticación exitosa') {
          console.log("Entrando...")
          this.router.navigate(['/admin']);
        }
      },
      (err: any) => {
        //Maneja Errores
        console.log(err);
        this.errorInicioSesion = 'Datos Incorrectos';
      }
    );
  }

  regresar() {
    this.router.navigate(['/home']);
  }

}