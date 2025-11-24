import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Model/producto.model';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'

  constructor( private _httpClient  : HttpClient){ }

  public getProducts(): Observable<Producto[]>{
    return this._httpClient.get<Producto[]>(this.baseURL)
  }

  public getProductById(id: number | string) : Observable<Producto>{
    return this._httpClient.get<Producto>(`${this.baseURL}/${id}`)
  }

    nuevoProducto : Producto =  {
        id: 25,
        title: 'cosas',
        price:  25, 
        description: 'skate',
        image: '',
    }

  public updateProduct(id: number | string ) : Observable<Producto>{

    return this._httpClient.put<Producto>(`${this.baseURL}/${id}`, this.nuevoProducto)
  }

  public deleteProducto( id : number | string ) : Observable<Producto>{
    return this._httpClient.delete<Producto>(`${this.baseURL}/${id}`)
  }}
