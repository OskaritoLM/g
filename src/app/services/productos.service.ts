import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public producto:Productos={
    id_producto: 0,
    descripcion: '',
    tamano: '',
    color: '',
    id_tipo: 0,
    imagen: '',
    precio_mayoreo: 0,
    precio_menudeo: 0,
    existencias: 0
  };

  public productos:Productos[]=[];

  URL_API='http://localhost:3000/productos/';

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<Productos[]>(this.URL_API);
  }

  createProductos(producto:Productos){
    return this.http.post(this.URL_API,producto);
  }

  deleteProductos(id_producto:number){
    return this.http.delete(this.URL_API+id_producto);
  }

  editProductos(producto:Productos){
    return this.http.put(this.URL_API+this.producto.id_producto,producto);
  }
}