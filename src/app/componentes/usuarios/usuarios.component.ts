import { Component,OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  constructor (public usuariosService:UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      res=>{
        this.usuariosService.usuarios = res;
        console.log(res);
      },

      err => console.log(err)
    )
  }

  updateUsuarios(form:NgForm){
    alert('Actualizando');
      this.usuariosService.editUsuarios(form.value).subscribe(
        res=> {
          this.getUsuarios();
          console.log(res);
          form.reset();
        },
        err=> console.log(err)
      )
  }

  createUsuarios(form:NgForm){
    this.usuariosService.createUsuarios(form.value).subscribe(
      res=> {
        this.getUsuarios();
        form.reset();
      },
      err=> console.log(err)
    )
  }

  deleteUsuarios(id_usuario:any){
    const resp = confirm('Quieres eliminarlo?');
    console.log('Eliminando '+id_usuario);
    if(resp){
      this.usuariosService.deleteUsuarios(id_usuario).subscribe(
        (res)=>{
          this.getUsuarios();
        },
        (err)=> console.log(err)
      );
    }
  }

  editUsuarios(usuarios:Usuarios){
    this.usuariosService.usuario = usuarios;
  }

  formReset(form:NgForm){
    this.usuariosService.usuario=form.value;
    form.reset();
  }

}
