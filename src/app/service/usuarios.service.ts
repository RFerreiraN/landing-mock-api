import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Model/usuarios.model';
import { Observable, retry } from 'rxjs';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseURL = 'https://fakestoreapi.com/users'

  constructor(
    private _http: HttpClient
  ) { }

  public getAllUsers(): Observable<Users[]> {
    return this._http.get<Users[]>(this.baseURL).pipe(retry(2))
  }

  public getUser(id: number | string): Observable<Users> {
    return this._http.get<Users>(`${this.baseURL}/${id}`).pipe(retry(2))
  }

  public newUser(user: Users): Observable<Users> {
    return this._http.post<Users>(this.baseURL, user)
  }

  public updateUser(id: number | string, user: Users): Observable<Users> {
    return this._http.put<Users>(`${this.baseURL}/${id}`, user)
  }

  public deleteUser(id: number | string): Observable<Users>{
    return this._http.delete<Users>(`${this.baseURL}/${id}`)
  }
}
