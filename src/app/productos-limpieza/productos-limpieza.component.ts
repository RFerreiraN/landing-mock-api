import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Users } from '../Model/usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-limpieza',
  templateUrl: './productos-limpieza.component.html',
  styleUrls: ['./productos-limpieza.component.css']
})
export class ProductosLimpiezaComponent implements OnInit{

    usuarios : Users[] = [];
   
    constructor(
      private _usersService : UsuariosService,
      private router : Router
    ){}

    ngOnInit(): void {
        this._usersService.getAllUsers().subscribe( (data : Users[]) => {
          this.usuarios = data;
          console.log(this.usuarios)
        })
    }

    detalles(id : number){
      this.router.navigate(['productosLimpieza', id])
    }

    
    }
  
