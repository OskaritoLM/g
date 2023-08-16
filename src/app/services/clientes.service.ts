import { Injectable } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginCredentials } from 'src/app/models/login'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public cliente: Clientes = {
    id_cliente: 0,
    nom_cliente: '',
    correo: '',
    direccion: '',
    telefono: '',
    rfc: '',
    pass: ''
  };

  public clientes: Clientes[] = [];

  URL_API = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.URL_API);
  }

  createClientes(cliente: Clientes): Observable<any> {
    return this.http.post(this.URL_API, cliente);
  }

  deleteClientes(id_cliente: number): Observable<any> {
    return this.http.delete(this.URL_API + id_cliente);
  }

  editClientes(cliente: Clientes): Observable<any> {
    return this.http.put(this.URL_API + cliente.id_cliente, cliente);
  }

  loginClientes(correo: string, pass: string): Observable<any> {
    const credentials = { correo, pass };
    console.log(this.URL_API + 'login');
    return this.http.post(this.URL_API + 'login', credentials);
  }
  registroClientes(nom_cliente: string, correo: string, direccion: string, telefono: string, rfc: string, pass: string): Observable<any> {
    const credentials = { nom_cliente, correo, direccion, telefono, rfc, pass};
    console.log(this.URL_API + 'registro');
    return this.http.post(this.URL_API + 'registro', credentials);
  }
}
