import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'

  constructor( private _httpClient  : HttpClient){ }

  public getProducts(): Observable<Producto[]>{
    return this._httpClient.get<Producto[]>(this.baseURL)
  }


}
