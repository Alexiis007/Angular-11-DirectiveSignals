import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[CustomLabel]'
})
export class CustomLabelDirective{

  public htmlElement ?: ElementRef<HTMLElement>;

  constructor(private element : ElementRef<HTMLElement>) { this.htmlElement = element }

  public colorNuevo : string = '';

  private _errors ?: ValidationErrors | null;

  @Input() set color(value:string){
    this.colorNuevo = value;
    this.setStyle();
  }

  //recivimos errores
  @Input() set getErrors(errors : ValidationErrors | null | undefined)
  {
    this._errors = errors;   
    this.setErrorMessage();
  }

  public setStyle():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this.colorNuevo;
  }

  public setErrorMessage(){
    if(!this.htmlElement) return;
    if(!this._errors) return;
    //Esto namas recive el listado de objetos y los ingresa en errors
    //como un string en el cual estan separadas por comas
    const errors = Object.keys(this._errors)
    if(errors.includes('required')){
      this.htmlElement!.nativeElement.innerText = 'Este campo es requerido';
      return;
    }
    else if(errors.includes('minlength')){
      let min = this._errors!['minlength']['requiredLength']
      this.htmlElement!.nativeElement.innerText = 'Este campo requiere minimo '+min+' caracterers';
      return;
    }
    else if(errors.includes('email')){
      this.htmlElement!.nativeElement.innerText = 'No es un email';
      return;
    }
    return;
  }
}

