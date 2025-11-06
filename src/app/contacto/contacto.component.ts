import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formularioContacto : FormGroup;

 constructor( private fb : FormBuilder ){
  this.formularioContacto =this.fb.group({
    nombre : ['', [Validators.required, Validators.minLength(6)]],
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
  })    
  };

  enviar( form : FormGroup ){
    console.log(form.value);
    form.reset();
  }

}

