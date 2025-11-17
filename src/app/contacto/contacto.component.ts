import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  formularioContacto : FormGroup

  constructor(private fb : FormBuilder){
      this.formularioContacto = this.fb.group({
        nombre : ['', Validators.required]
      })
  }

  ngOnInit(): void {
    
  }
  
}

