import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

    public usuario = {
      nombre : '',
      email : ''
    }
    constructor(){}

    enviar(){
      console.log(this.usuario)
    }
}
