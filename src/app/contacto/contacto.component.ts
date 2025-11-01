import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

    public usuario = {
      nombre : '',
      email : ''
    }

    resetForm(form: any){
      form.resetForm()
    }

    enviar(form : any){
      if(form.valid){
          console.log('Formulario válido: ', this.usuario)
      }else{
        console.log('Formulario inválido')
      }
      this.resetForm(form)
    }

}
