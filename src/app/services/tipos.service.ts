import { Injectable } from '@angular/core';
import { Tipos } from 'src/models/tipos';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  public tipos:Tipos={
    id_tipo:0, tipo:''
  };

  public tipo:Tipos[]=[];

  URL_API='http://localhost:3000/tipos/'

  constructor(private http: HttpClient) { }

  getTipos(){
    return this.http.get<Tipos[]>(this.URL_API);
  }

  createTipos(tipos:Tipos){
    return this.http.post(this.URL_API,tipos);
  }

  deleteTipos(id_tipo:number){
    return this.http.delete(this.URL_API+id_tipo);
  }

  editTipos(tipos:Tipos){
    return this.http.put(this.URL_API+tipos.id_tipo,tipos);
  }
}
