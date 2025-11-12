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
      tipoId : ['DNI'],
      id : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]+$/)]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('tipoId')?.valueChanges.subscribe( valor => {
      this.tipoId = valor
    })
    
    
  }

  validacionCampos(tipoId : string){
    const idControl = this.formularioContacto.get('id');

    if(!idControl) return;

    idControl.clearValidators();

    switch(tipoId){
      case 'DNI':
        idControl.setValidators([
          Validators.required,
          Validators.pattern(/^[0-9]{8}[A-Z]$/)
        ]);
        break;
      
        case 'NIE':
          idControl.setValidators([
            Validators.required,
            Validators.pattern(/^[XYZ][0-9]{7}[A-Z]$/)
        ]);
        break;

        case 'Pasaporte' :
          idControl.setValidators([
            Validators.required,
            Validators.pattern(/^[A-Z0-9]{6,9}$/)
        ]);
        break;
    }

      idControl.updateValueAndValidity();
  }

  hasError( controlInput : string, typeError : string ){
   return(
      this.formularioContacto.get(controlInput)?.hasError(typeError) 
      && (this.formularioContacto.get(controlInput)?.touched || this.formularioContacto.get(controlInput)?.dirty)
   ) 
  }

  enviar(form : FormGroup){
    console.log(form.value);
    form.reset()
  }

  
}

