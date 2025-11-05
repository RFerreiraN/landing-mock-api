import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formularioContacto: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      nombre : ['', [Validators.required, Validators.minLength(6)]],
      email : ['', [Validators.required, Validators.email]]
    })
    }
  
  enviar( form : FormGroup ){
      if (form.invalid) {
    form.markAllAsTouched();
    return;
  }
    console.log(form.value)
    form.reset()
  }

  hasError( controlItemForm : string, typeError : string){
    return this.formularioContacto.get(controlItemForm)?.hasError(typeError) && this.formularioContacto.get(controlItemForm)?.touched
  }
}
