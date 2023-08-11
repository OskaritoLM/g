import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from 'src/app/models/productos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admi-product',
  templateUrl: './admi-product.component.html',
  styleUrls: ['./admi-product.component.css']
})
export class AdmiProductComponent implements OnInit {
  constructor (public productosService:ProductosService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res=>{
        this.productosService.productos = res;
        console.log(res);
      },

      err => console.log(err)
    )
  }

  updateProductos(form:NgForm){
    alert('Actualizando');
      this.productosService.editProductos(form.value).subscribe(
        res=> {
          this.getProductos();
          console.log(res);
          form.reset();
        },
        err=> console.log(err)
      )
  }

  createProductos(form:NgForm){
    this.productosService.createProductos(form.value).subscribe(
      res=> {
        this.getProductos();
        form.reset();
      },
      err=> console.log(err)
    )
  }

  deleteProductos(id_producto:any){
    const resp = confirm('Quieres eliminarlo?');
    console.log('Eliminando '+id_producto);
    if(resp){
      this.productosService.deleteProductos(id_producto).subscribe(
        (res)=>{
          this.getProductos();
        },
        (err)=> console.log(err)
      );
    }
  }

  editProductos(producto:Productos){
    this.productosService.producto = producto;
  }

  formReset(form:NgForm){
    this.productosService.producto=form.value;
    form.reset();
  }

}

