import { Component,OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from 'src/app/models/clientes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  constructor (public clientesService:ClientesService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.clientesService.getClientes().subscribe(
      (      res: any)=>{
        this.clientesService.clientes = res;
        console.log(res);
      },

      (      err: any) => console.log(err)
    )
  }

  updateClientes(form:NgForm){
    alert('Actualizando');
      this.clientesService.editClientes(form.value).subscribe(
        (        res: any)=> {
          this.getClientes();
          console.log(res);
          form.reset();
        },
        (        err: any)=> console.log(err)
      )
  }

  createClientes(form:NgForm){
    this.clientesService.createClientes(form.value).subscribe(
      (      res: any)=> {
        this.getClientes();
        form.reset();
      },
      (      err: any)=> console.log(err)
    )
  }

  deleteClientes(id_cliente:any){
    const resp = confirm('¿Estas seguro que quieres eliminar el cliente?');
    console.log('Eliminando '+id_cliente);
    if(resp){
      this.clientesService.deleteClientes(id_cliente).subscribe(
        (res: any)=>{
          this.getClientes();
        },
        (err: any)=> console.log(err)
      );
    }
  }

  editClientes(cliente:Clientes){
    this.clientesService.cliente = cliente;
  }

  formReset(form: NgForm) {
    this.clientesService.cliente=form.value;
    form.reset();
  }

}
