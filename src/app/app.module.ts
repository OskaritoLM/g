import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VajillasComponent } from './componentes/vajillas/vajillas.component';

import { JarronesComponent } from './componentes/jarrones/jarrones.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProbedorComponent } from './componentes/probedor/probedor.component';
import { LogadmComponent } from './componentes/logadm/logadm.component';
import { LogprovComponent } from './componentes/logprov/logprov.component';
import { HomeUserComponent } from './componentes/home-user/home-user.component';
import { ProdUserComponent } from './componentes/prod-user/prod-user.component';
import { LoginComponent } from './componentes/login/login.component';
import { CommonModule } from '@angular/common';
import { NavusrComponent } from './componentes/navusr/navusr.component';
import { NavbasicComponent } from './componentes/navbasic/navbasic.component';
import { TiposComponent } from './componentes/tipos/tipos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { GalleriaComponent } from './componentes/galleria/galleria.component';
import { MaterialesComponent } from './componentes/materiales/materiales.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { MensajesResComponent } from './componentes/mensajes-res/mensajes-res.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { AdmiProductComponent } from './componentes/admi-product/admi-product.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';
import { DecorativosComponent } from './componentes/decorativos/decorativos.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    VajillasComponent,
    JarronesComponent,
    RegistroComponent,
    AdminComponent,
    ProbedorComponent,
    LogadmComponent,
    LogprovComponent,
    HomeUserComponent,
    ProdUserComponent,
    LoginComponent,
    NavusrComponent,
    NavbasicComponent,
    TiposComponent,
    ClientesComponent,
    PedidosComponent,
    GalleriaComponent,
    AdmiProductComponent,
    MaterialesComponent,
    UsuariosComponent,
    MensajesResComponent,
    MensajesComponent,
    AdmiProductComponent,
    ProveedoresComponent,
    DecorativosComponent,
    DetallesDecorativo1Component,
    DetallesDecorativo2Component,
    DetallesDecorativo3Component,
    DetallesDecorativo4Component,
    DetallesVajilla1Component,
    DetallesVajilla2Component,
    DetallesVajilla3Component,
    DetallesVajilla4Component,
    DetallesJarron1Component,
    DetallesJarron2Component,
    DetallesJarron3Component,
    DetallesJarron4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
