import { Component, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { DecorativosComponent } from './componentes/decorativos/decorativos.component';
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
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { DetallesDecorativo1Component } from './componentes/detalles-decorativo1/detalles-decorativo1.component';
import { DetallesDecorativo2Component } from './componentes/detalles-decorativo2/detalles-decorativo2.component';
import { DetallesDecorativo3Component } from './componentes/detalles-decorativo3/detalles-decorativo3.component';
import { DetallesDecorativo4Component } from './componentes/detalles-decorativo4/detalles-decorativo4.component';
import { DetallesVajilla1Component } from './componentes/detalles-vajilla1/detalles-vajilla1.component';
import { DetallesVajilla2Component } from './componentes/detalles-vajilla2/detalles-vajilla2.component';
import { DetallesVajilla3Component } from './componentes/detalles-vajilla3/detalles-vajilla3.component';
import { DetallesVajilla4Component } from './componentes/detalles-vajilla4/detalles-vajilla4.component';
import { DetallesJarron1Component } from './componentes/detalles-jarron1/detalles-jarron1.component';
import { DetallesJarron2Component } from './componentes/detalles-jarron2/detalles-jarron2.component';
import { DetallesJarron3Component } from './componentes/detalles-jarron3/detalles-jarron3.component';
import { DetallesJarron4Component } from './componentes/detalles-jarron4/detalles-jarron4.component';
import { HomeUserComponent } from './componentes/home-user/home-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos',component:ProductosComponent},
  {path:'deco', component:DecorativosComponent},
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
  {path: 'admi-product', component: AdmiProductComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'decorativos', component: DecorativosComponent},
  {path: 'detalles-decorativo1', component: DetallesDecorativo1Component},
  {path: 'detalles-decorativo2', component: DetallesDecorativo2Component},
  {path: 'detalles-decorativo3', component: DetallesDecorativo3Component},
  {path: 'detalles-decorativo4', component: DetallesDecorativo4Component},
  {path: 'detalles-vajilla1', component: DetallesVajilla1Component},
  {path: 'detalles-vajilla2', component: DetallesVajilla2Component},
  {path: 'detalles-vajilla3', component: DetallesVajilla3Component},
  {path: 'detalles-vajilla4', component: DetallesVajilla4Component},
  {path: 'detalles-jarron1', component: DetallesJarron1Component},
  {path: 'detalles-jarron2', component: DetallesJarron2Component},
  {path: 'detalles-jarron3', component: DetallesJarron3Component},
  {path: 'detalles-jarron4', component: DetallesJarron4Component},
  {path: 'home-user', component: HomeUserComponent }, // Cambia esto al componente correcto
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
