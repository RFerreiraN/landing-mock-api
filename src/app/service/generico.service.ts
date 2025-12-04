import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  baseURL = 'https://fakestoreapi.com/'

  constructor(
    private _http : HttpClient
  ) { }

  public getAllItem<T>() : Observable<T[]>{
    return this._http.get<T[]>(this.baseURL)
  }

  public getItem<T>(id : number | string ) : Observable<T>{
    return this._http.get<T>(`${this.baseURL}/${id}`)
  }

  public newItem<T>(item : T) : Observable<T>{
    return this._http.post<T>(this.baseURL, item)
  }

  public updateItem<T>(id: number | string, item : T) : Observable<T>{
    return this._http.put<T>(`${this.baseURL}/${id}`, item)
  }

  public deleteItem<T>(id : number | string ) : Observable<T>{
    return this._http.delete<T>(`${this.baseURL}/${id}`)
  }
}
