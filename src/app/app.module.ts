import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetalleComponent } from './productos-detalle/productos-detalle.component';
import { ProductosLimpiezaComponent } from './productos-limpieza/productos-limpieza.component';
import { ProductosLimpiezaDetallesComponent } from './productos-limpieza-detalles/productos-limpieza-detalles.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ProductosDetalleComponent,
    ProductosLimpiezaComponent,
    ProductosLimpiezaDetallesComponent,
    CarritoComponent,
    ContactoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
