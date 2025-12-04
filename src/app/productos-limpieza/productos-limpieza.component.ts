import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Producto } from '../Model/producto.model';

@Component({
  selector: 'app-productos-limpieza',
  templateUrl: './productos-limpieza.component.html',
  styleUrls: ['./productos-limpieza.component.css']
})
export class ProductosLimpiezaComponent implements OnInit{

    productoList : Producto[] = [];
    
    constructor( 
     private _apiService : ApiService
    ){}

    ngOnInit(): void {
      this._apiService.getAllProducts().subscribe( data => {
         this.productoList = data;
         console.log(data)
      })
    }
}
