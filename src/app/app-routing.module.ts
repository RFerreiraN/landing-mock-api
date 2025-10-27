import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetalleComponent } from './productos-detalle/productos-detalle.component';
import { ProductosLimpiezaComponent } from './productos-limpieza/productos-limpieza.component';
import { ProductosLimpiezaDetallesComponent } from './productos-limpieza-detalles/productos-limpieza-detalles.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'productos', component : ProductosComponent},
  { path : 'productos/:productoId', component : ProductosDetalleComponent},
  { path : 'productosLimpieza', component : ProductosLimpiezaComponent},
  { path : 'productosLimpieza/:productoId', component : ProductosLimpiezaDetallesComponent},
  { path : 'carrito', component : CarritoComponent},
  { path : 'contacto', component : ContactoComponent},
  { path : '**' , redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
