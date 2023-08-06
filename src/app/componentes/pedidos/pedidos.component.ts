import { Component,OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedidos } from 'src/app/models/pedidos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{
  constructor (public pedidosService:PedidosService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(){
    this.pedidosService.getPedidos().subscribe(
      (      res: any)=>{
        this.pedidosService.pedidos = res;
        console.log(res);
      },

      (      err: any) => console.log(err)
    )
  }
  getPedidosCompletados(): Pedidos[] {
    return this.pedidosService.pedidos.filter((pedido: Pedidos) => pedido.estatus === 'completado');
  }
  updatePedidos(form:NgForm){
    alert('Actualizando');
      this.pedidosService.editPedidos(form.value).subscribe(
        (        res: any)=> {
          this.getPedidos();
          console.log(res);
          form.reset();
        },
        (        err: any)=> console.log(err)
      )
  }

  createPedidos(form:NgForm){
    this.pedidosService.createPedidos(form.value).subscribe(
      (      res: any)=> {
        this.getPedidos();
        form.reset();
      },
      (      err: any)=> console.log(err)
    )
  }

  deletePedidos(id_pedido:any){
    const resp = confirm('¿Estas seguro que quieres eliminar el pedido?');
    console.log('Eliminando '+id_pedido);
    if(resp){
      this.pedidosService.deletePedidos(id_pedido).subscribe(
        (res: any)=>{
          this.getPedidos();
        },
        (err: any)=> console.log(err)
      );
    }
  }

  editPedidos(pedido:Pedidos){
    this.pedidosService.pedido = pedido;
  }

  formReset(form: NgForm) {
    this.pedidosService.pedido=form.value;
    form.reset();
  }

}
