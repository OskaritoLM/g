import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  public usuario:Usuarios={
    id_usuario: 0, 
    nom_usuario: '',
    clave: '',
    correo: ''
  };

  public usuarios:Usuarios[]=[];

  URL_API='http://localhost:3000/usuarios/';

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuarios[]>(this.URL_API);
  }

  createUsuarios(usuario:Usuarios){
    return this.http.post(this.URL_API,usuario);
  }

  deleteUsuarios(id_usuario:number){
    return this.http.delete(this.URL_API+id_usuario);
  }

  editUsuarios(usuario:Usuarios){
    return this.http.put(this.URL_API+this.usuario.id_usuario,usuario);
  }

  loginUsuarios(correo: string, clave: string): Observable<any>{
    const credentials = { correo, clave };
    console.log(this.URL_API + 'login');
    return this.http.post(this.URL_API + 'login', credentials);
  }

}