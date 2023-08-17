import { Injectable } from '@angular/core';
import { Proveedores } from 'src/app/models/proveedores';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  public proveedor:Proveedores={
    id_proveedor:0, nom_proveedor:'',correo:'',telefono:''
  };

  public proveedores:Proveedores[]=[];

  URL_API='http://localhost:3000/proveedores/';

  constructor(private http: HttpClient) { }

  getProveedores(){
    return this.http.get<Proveedores[]>(this.URL_API);
  }

  createProveedores(proveedor:Proveedores){
    return this.http.post(this.URL_API,proveedor);
  }

  deleteProveedores(id_proveedor:number){
    return this.http.delete(this.URL_API+id_proveedor);
  }

  editProveedores(proveedor:Proveedores){
    return this.http.put(this.URL_API+this.proveedor.id_proveedor,proveedor);
  }
}