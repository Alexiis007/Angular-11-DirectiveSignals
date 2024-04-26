import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  public counter = signal(10);
  //variables de solo lectura
  //estas no son modificables mas que en su creacion o declaracion
  //pueden cambiar si en sus valores esta una signal que cuando cambie
  //tambien haga cambiar el de solo lectura
  public squareCounter = computed(()=> this.counter()*this.counter());

  //OJO para acceder a los valores de una signal es con parentesis
  //Si se quiere isar sus propiedades como signal es sin parentesis

  public increseBy(value : number):void{
    //Update trabaja con el valor presente, lo soguiente es actualizar ese argumento
    //valor pasado => algo
    this.counter.update(current => current+value)
  }
}

