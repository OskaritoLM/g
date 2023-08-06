import { Injectable } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public cliente:Clientes={
    id_cliente:0, nom_cliente:'', correo:'', direccion:'', telefono:'', rfc:''
  };

  public clientes:Clientes[]=[];

  URL_API='http://localhost:3000/clientes/';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Clientes[]>(this.URL_API);
  }

  createClientes(cliente: Clientes): Observable<any> {
    return this.http.post(this.URL_API, cliente);
  }

  deleteClientes(id_cliente:number){
    return this.http.delete(this.URL_API+id_cliente);
  }

  editClientes(cliente: Clientes): Observable<any> {
    return this.http.put(this.URL_API + cliente.id_cliente, cliente);
  }

}