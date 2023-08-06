import { Injectable } from '@angular/core';
import { Pedidos } from 'src/app/models/pedidos';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  public pedido:Pedidos={
    id_pedido:0, id_cliente:0, id_usuario:0, fecha:'', monto:0, estatus:''
  };

  public pedidos:Pedidos[]=[];

  URL_API='http://localhost:3000/pedidos/';

  constructor(private http: HttpClient) { }

  getPedidos(){
    return this.http.get<Pedidos[]>(this.URL_API);
  }

  createPedidos(pedido: Pedidos): Observable<any> {
    return this.http.post(this.URL_API, pedido);
  }

  deletePedidos(id_pedido:number){
    return this.http.delete(this.URL_API+id_pedido);
  }

  editPedidos(pedido: Pedidos): Observable<any> {
    return this.http.put(this.URL_API + pedido.id_pedido, pedido);
  }

}