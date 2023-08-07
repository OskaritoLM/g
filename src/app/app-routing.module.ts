import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AzulejosComponent } from './componentes/azulejos/azulejos.component';
import { VajillasComponent } from './componentes/vajillas/vajillas.component';
import { JarronesComponent } from './componentes/jarrones/jarrones.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { LogadmComponent } from './componentes/logadm/logadm.component';
import { LogprovComponent } from './componentes/logprov/logprov.component';
import { TiposComponent } from './componentes/tipos/tipos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { GalleriaComponent } from './componentes/galleria/galleria.component';
import { AdmiProductComponent } from './componentes/admi-product/admi-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos',component:ProductosComponent},
  {path:'deco', component:AzulejosComponent},
  {path:'vajillas',component:VajillasComponent},
  {path:'jarrones',component:JarronesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'logadm', component: LogadmComponent},
  {path: 'logprov', component: LogprovComponent},
  {path: 'tipos', component: TiposComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'galeria', component:GalleriaComponent},
  {path: 'admi-product', component: AdmiProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
