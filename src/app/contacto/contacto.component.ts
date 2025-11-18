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
    this.formularioContacto.get('id')?.valueChanges.subscribe(valor => {
      this.tipoId = valor;
      this.validatorsDeId(valor)
    })
    this.validatorsDeId(this.tipoId)
  }

  validatorsDeId( tipo: string){
    const controlId = this.formularioContacto.get('tipoId');

    if(!controlId) return

    controlId.clearValidators();

    switch(tipo){
      case 'DNI':
        controlId.setValidators([
          Validators.required,
          Validators.pattern(/^[0-9]{8}[A-Z]$/)
        ])
      break;

      case 'NIE' :
        controlId.setValidators([
          Validators.required,
          Validators.pattern(/^[XYZ][0-9]{7}[A-Z]$/)
        ])
      break;

      case 'Pasaporte' :
        controlId.setValidators([
          Validators.required,
          Validators.pattern(/^[A-Z0-9]{6,9}$/)
        ])
      break;

    }

    controlId.updateValueAndValidity();
  }

  hasError( controlInput : string, typeError : string){
    return this.formularioContacto.get(controlInput)?.hasError(typeError) &&
    (this.formularioContacto.get(controlInput)?.touched || this.formularioContacto.get(controlInput)?.dirty)
  }
  
}

