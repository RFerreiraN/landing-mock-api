import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Model/tarjeta.model';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  private baseURL = 'https://fakestoreapi.com/carts';

  constructor(
    private _http : HttpClient
  ) { }

  public getAllCarts() : Observable<Cart[]>{
    return this._http.get<Cart[]>(this.baseURL).pipe(retry(2))
  }  

  public getCart(id : number | string ) : Observable<Cart>{
    return this._http.get<Cart>(`${this.baseURL}/${id}`).pipe(retry(2))
  }

  public newCart(carta : Cart) : Observable<Cart>{
    return this._http.post<Cart>(this.baseURL, carta)
  }

  public updateCart(id: number, carta : Cart) : Observable<Cart>{
    return this._http.put<Cart>(`${this.baseURL}/${id}`, carta)
  }

  public deleteCart(id: number | string ) : Observable<Cart>{
    return this._http.delete<Cart>(`${this.baseURL}/${id}`)
  }
}
