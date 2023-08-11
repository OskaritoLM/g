import { Injectable } from '@angular/core';
import { Tipos } from 'src/app/models/tipos';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  public tipo:Tipos={
    id_tipo:0, tipo:''
  };

  public tipos:Tipos[]=[];

  URL_API='http://localhost:3000/tipos/';

  constructor(private http: HttpClient) { }

  getTipos(){
    return this.http.get<Tipos[]>(this.URL_API);
  }

  createTipos(tipo:Tipos){
    return this.http.post(this.URL_API,tipo);
  }

  deleteTipos(id_tipo:number){
    return this.http.delete(this.URL_API+id_tipo);
  }

  editTipos(tipo:Tipos){
    return this.http.put(this.URL_API+this.tipo.id_tipo,tipo);
  }
}