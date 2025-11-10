import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  formularioRegistro : FormGroup;
  tipoId : string = 'DNI'

  constructor( private fb: FormBuilder ){
    this.formularioRegistro = this.fb.group({
      nombre : ['', Validators.required],
      apellidos : ['', Validators.required],
      identificacion : [''],
      tipoId : ['DNI'],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }
  ngOnInit(): void {
    this.formularioRegistro.get('tipoId')?.valueChanges.subscribe(valor => {
      this.tipoId = valor;
      this.actualizarValidacionIdentificacion(valor)
    });

    this.actualizarValidacionIdentificacion(this.tipoId)
  }

  actualizarValidacionIdentificacion(tipo: string) {
    const idControl = this.formularioRegistro.get('identificacion');

    if (!idControl) return;

    // Limpiamos validadores previos
    idControl.clearValidators();

    // Añadimos validadores según tipo
    switch (tipo) {
      case 'DNI':
        idControl.setValidators([
          Validators.required,
          Validators.pattern(/^[0-9]{8}[A-Z]$/),
        ]);
        break;

      case 'NIE':
        idControl.setValidators([
          Validators.required,
          Validators.pattern(/^[XYZ][0-9]{7}[A-Z]$/),
        ]);
        break;

      case 'Pasaporte':
        idControl.setValidators([
          Validators.required,
          Validators.pattern(/^[A-Z0-9]{6,9}$/),
        ]);
        break;
    }

    // Re-evaluamos el control para aplicar los nuevos validadores
    idControl.updateValueAndValidity();
  }

  enviar(form : FormGroup){
    console.log(form.value);
    form.reset()
  }

  hasError( controlInput : string, typeError : string){
    return this.formularioRegistro.get(controlInput)?.hasError(typeError) 
    && (this.formularioRegistro.get(controlInput)?.touched || this.formularioRegistro.get(controlInput)?.dirty) 
  }
}

