import { Component, OnInit } from '@angular/core';
import { Producto } from '../Model/producto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit{
    urlApi : string = 'https://fakestoreapi.com/products';
    productoDetalle? : Producto

    constructor(
      private _route : ActivatedRoute
    ){}

    async fetchDetalle(id: number){
      try {
        const res = await fetch(`${this.urlApi}/${id}`)
        const data : Producto = await res.json()
        this.productoDetalle = data
        console.log(data)
      } catch (error) {
        console.error('Ha ocurrido un error: ', error)
      }
    }

    ngOnInit(): void {
      this._route.params.subscribe( params => {
         const idProducto =  params['productoId']
         this.fetchDetalle(idProducto)
      })
    }
}
