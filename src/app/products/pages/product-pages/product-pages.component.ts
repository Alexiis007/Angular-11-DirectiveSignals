import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: './product-pages.component.html',
  styleUrl: './product-pages.component.css'
})
export class ProductPagesComponent {
  //Otro tipo de inyeccion
  private fb = inject(FormBuilder);

  public color : string = 'black'

  public myForm : FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(6),Validators.email]]
  })

  public changeColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
