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

  constructor( private fb : FormBuilder ){
    this.formularioContacto = this.fb.group({
      nombre : ['', Validators.required],
      apellidos : ['', Validators.required],
      id : ['', Validators.required],
      tipoId : ['DNI'],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }
  ngOnInit(): void {
    this.formularioContacto.get('tipoId')?.valueChanges.subscribe( valor => {
      this.tipoId = valor
    })

    if(this.tipoId === 'DNI'){

    }

    //TODO asignar validaciones a cada uno de los casos de id disponibles (dni,nie,pasaporte)
  }

  hasError( inputName : string , typeError : string){
    return this.formularioContacto.get(inputName)?.hasError(typeError) 
    && (this.formularioContacto.get(inputName)?.touched || this.formularioContacto.get(inputName)?.dirty)
  }

  enviar( form : FormGroup ){
    console.log(form.value)
    form.reset()
    
  }
}

