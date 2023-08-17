import { Component,OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { Proveedores } from 'src/app/models/proveedores';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit{
  constructor (public proveedoresService:ProveedoresService) {}

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedores(){
    this.proveedoresService.getProveedores().subscribe(
      res=>{
        this.proveedoresService.proveedores = res;
        console.log(res);
      },

      err => console.log(err)
    )
  }

  updateProveedores(form:NgForm){
    alert('Actualizando');
      this.proveedoresService.editProveedores(form.value).subscribe(
        res=> {
          this.getProveedores();
          console.log(res);
          form.reset();
        },
        err=> console.log(err)
      )
  }

  createProveedores(form:NgForm){
    this.proveedoresService.createProveedores(form.value).subscribe(
      res=> {
        this.getProveedores();
        form.reset();
      },
      err=> console.log(err)
    )
  }

  deleteProveedores(id_proveedor:any){
    const resp = confirm('Quieres eliminarlo?');
    console.log('Eliminando '+id_proveedor);
    if(resp){
      this.proveedoresService.deleteProveedores(id_proveedor).subscribe(
        (res)=>{
          this.getProveedores();
        },
        (err)=> console.log(err)
      );
    }
  }

  editProveedores(proveedores:Proveedores){
    this.proveedoresService.proveedor = proveedores;
  }

  formReset(form:NgForm){
    this.proveedoresService.proveedor=form.value;
    form.reset();
  }

}
