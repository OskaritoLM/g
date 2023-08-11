import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AzulejosComponent } from './componentes/azulejos/azulejos.component';
import { VajillasComponent } from './componentes/vajillas/vajillas.component';
import { JarronesComponent } from './componentes/jarrones/jarrones.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdminComponent } from './componentes/admin/admin.component';
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
import { AdmiProductComponent } from './componentes/admi-product/admi-product.component';
import { MaterialesComponent } from './componentes/materiales/materiales.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    AzulejosComponent,
    VajillasComponent,
    JarronesComponent,
    RegistroComponent,
    AdminComponent,
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
