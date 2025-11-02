import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  formularioLogin : FormGroup;

  constructor( private form : FormBuilder ){
    this.formularioLogin = this.form.group({
      usuario : ['', Validators.required],
      contraseña : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  enviar(form : FormGroup){
    console.log(form.value)
    form.reset()
  }
}
