import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../Model/producto.model';
import { productList } from '../productos-limpieza/productos.mock';


@Component({
  selector: 'app-productos-limpieza-detalles',
  templateUrl: './productos-limpieza-detalles.component.html',
  styleUrls: ['./productos-limpieza-detalles.component.css']
})
export class ProductosLimpiezaDetallesComponent implements OnInit {
  producto? : Producto;
  productList? = productList;

  constructor(
    private _router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._router.params.subscribe( params => {
      this.producto = this.productList?.find( producto => producto.id == params['productoId'])
    })
  }
}
