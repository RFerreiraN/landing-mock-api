import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Producto } from '../Model/producto.model';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'
  constructor(
    private _http: HttpClient
  ) { }

  public getAllProducts(): Observable<Producto[]> {
    return this._http.get<Producto[]>(this.baseURL) // Devuelve un array con todos los productos
  }
   
  public getProduct(id: number | string): Observable<Producto> {
    return this._http.get<Producto>(`${this.baseURL}/${id}`) // Devuelve un objeto con el producto que se haya buscado por su ID
  }

  public getAllCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${this.baseURL}/categories`) //Devuelve un array con todas las categorias
  }

  public filterCategory(category: Category): Observable<Producto[]> {
    return this._http.get<Producto[]>(`${this.baseURL}/category/${category}`) // Devuelve la categoria que se le haya pasado por parametro
  }

  public newProduct(producto: Producto): Observable<Producto> {
    return this._http.post<Producto>(this.baseURL, producto) // Se crea un nuevo producto, con nuevo ID
  }

  public updateProduct(id: number | string, producto: Producto): Observable<Producto> {
    return this._http.put<Producto>(`${this.baseURL}/${id}`, producto) //Se actualiza todo el producto 
  }

  public deleteProduct(id: number | string): Observable<Producto> {
    return this._http.delete<Producto>(`${this.baseURL}/${id}`) // Elimina el Producto Seleccionado por ID
  }


}
