import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../Model/usuarios.model';
import { UsuariosService } from '../service/usuarios.service';


@Component({
  selector: 'app-productos-limpieza-detalles',
  templateUrl: './productos-limpieza-detalles.component.html',
  styleUrls: ['./productos-limpieza-detalles.component.css']
})
export class ProductosLimpiezaDetallesComponent implements OnInit {

  usuario? : Users
  
  constructor(
    private _router : ActivatedRoute,
    private _usersService : UsuariosService
  ) { }

  ngOnInit(): void {
    this._router.params.subscribe( params => {
      this._usersService.getUser(params['productoId']).subscribe(data => {
        this.usuario = data
        console.log(data)
      })
    })
  }
}
