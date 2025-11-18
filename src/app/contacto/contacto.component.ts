import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  formularioContacto : FormGroup;
  tipoId : string = 'DNI'

  constructor(private fb : FormBuilder){
      this.formularioContacto = this.fb.group({
        nombre : ['', Validators.required],
        apellidos : ['', Validators.required],
        email : ['', [Validators.required, Validators.email]],
        id : ['DNI'],
        tipoId : [],
        password : ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]+$/)]]
      })
  }

  enviar(form : FormGroup){
    console.log(form.value)
    form.reset()
  }

  ngOnInit(): void {
    
  }

  hasError( controlInput : string, typeError : string){
    return this.formularioContacto.get(controlInput)?.hasError(typeError) &&
    (this.formularioContacto.get(controlInput)?.touched || this.formularioContacto.get(controlInput)?.dirty)
  }
  
}

