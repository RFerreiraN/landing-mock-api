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

  this.formularioContacto =this.fb.group({
    nombre : ['', [Validators.required, Validators.minLength(6)]],
    email : ['', [Validators.required, Validators.email]],
    dni : ['', [Validators.required, Validators.minLength(8), Validators.pattern('^([0-9]{8}[A-Z]|[XYZ][0-9]{7}[A-Z]|[A-Z0-9]{6,9})$')]],
    tipoDni : [''],
    password : ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
  })    
  };

  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(valor => {
      this.tipoId = valor;
      console.log(this.tipoId)
    })
  }

 enviar(form: FormGroup) {
  if (form.valid) {
    console.log('Datos enviados:', form.value);
    form.reset();
  } else {
    form.markAllAsTouched(); 
  }
}

  hasError( controlInput : string, typeError : string ){
    return this.formularioContacto.get(controlInput)?.hasError(typeError) 
      && (this.formularioContacto.get(controlInput)?.touched || this.formularioContacto.get(controlInput)?.dirty )
  }

}

