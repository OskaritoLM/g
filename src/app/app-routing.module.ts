import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VajillasComponent } from './componentes/vajillas/vajillas.component';
import { JarronesComponent } from './componentes/jarrones/jarrones.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProbedorComponent } from './componentes/probedor/probedor.component';
import { LogadmComponent } from './componentes/logadm/logadm.component';
import { LogprovComponent } from './componentes/logprov/logprov.component';
import { TiposComponent } from './componentes/tipos/tipos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { GalleriaComponent } from './componentes/galleria/galleria.component';
import { AdmiProductComponent } from './componentes/admi-product/admi-product.component';
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
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {path: ' ', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos',component:ProductosComponent},
  {path:'vajillas',component:VajillasComponent},
  {path:'jarrones',component:JarronesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'probedor', component:ProbedorComponent},
  {path: 'logadm', component: LogadmComponent},
  {path: 'logprov', component: LogprovComponent},
  {path: 'tipos', component: TiposComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'galeria', component:GalleriaComponent},
  {path: 'admi-product', component:AdmiProductComponent },
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
