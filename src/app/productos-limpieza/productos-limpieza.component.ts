import { Component, OnInit } from '@angular/core';
import { productList } from './productos.mock';

@Component({
  selector: 'app-productos-limpieza',
  templateUrl: './productos-limpieza.component.html',
  styleUrls: ['./productos-limpieza.component.css']
})
export class ProductosLimpiezaComponent implements OnInit{

    productoList = productList;
    
    constructor( 
     
    ){}

    ngOnInit(): void {
    }
}
