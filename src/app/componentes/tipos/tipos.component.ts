import { Component,OnInit } from '@angular/core';
import { TiposService } from 'src/app/services/tipos.service';
import { Tipos } from 'src/models/tipos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit{
  constructor (public tiposService:TiposService) {}

  ngOnInit(): void {
    this.getTipos();
  }

  getTipos(){
    this.tiposService.getTipos().subscribe(
      res=>{
        this.tiposService.tipo = res;
        console.log(res);
      },

      err => console.log(err)
    )
  }

  createTipos(form:NgForm){
    if(form.value.id_tipo !== 0){
      alert('Actualizando');
      this.tiposService.editTipos(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }else{
      this.tiposService.createTipos(form.value).subscribe(
        res=> {
          this.getTipos();
          form.reset();
        },
        err=> console.log(err)
      )
    }
  }

  deleteTipos(id_tipo:any){
    const resp = confirm('Quieres eliminarlo?');
    console.log('Eliminando '+id_tipo);
    if(resp){
      this.tiposService.deleteTipos(id_tipo).subscribe(
        (res)=>{
          this.getTipos();
        },
        (err)=> console.log(err)
      );
    }
  }

  editTipos(tipo:Tipos){
    this.tiposService.tipos = tipo;
  }

  formReset(form:NgForm){
    this.tiposService.tipos=form.value;
    form.reset();
  }

}
