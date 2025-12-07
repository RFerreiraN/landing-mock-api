import { Component, OnInit } from '@angular/core';
import { Producto } from '../Model/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  urlApi : string = 'https://fakestoreapi.com/products'
  productos : Producto[] = [];

    constructor(
      private _router : Router,
    ){}

  async fetchProductos( ){
    try {
      const res = await fetch(this.urlApi)
      const data : Producto[] = await res.json()
      this.productos = data
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  } 

  detalleProductos( id : number ){
    this._router.navigate(['productos', id])
  }

  ngOnInit(): void {
    this.fetchProductos( )
  }
}
