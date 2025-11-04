import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  formularioContacto: FormGroup;

  constructor(private form: FormBuilder) {
    // Formulario Reactivo
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  enviarReactivo(form : FormGroup) {
    console.log(form.value)
    form.reset()
  }

  
  //Formulario de Plantilla

  public usuario = {
    nombre: '',
    email: ''
  }

  resetForm(form: any) {
    form.resetForm()
  }

  enviar(form: any) {
    if (form.valid) {
      console.log('Formulario válido: ', this.usuario)
    } else {
      console.log('Formulario inválido')
    }
    this.resetForm(form)
  }

}
