import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public user = signal<User>({
      id:         1,
      email:      'alexis@gmail.com',
      first_name: 'alexis',
      last_name:  'juarez',
      avatar:     'jpg',
  });

  public fullName = computed(()=>this.user().first_name+" "+this.user().last_name);

  public onFielUpdated(field : keyof User, value:string):void{
    //Forma de actualizar solo un dato de la signal<User>
    // this.user.set({...this.user(),[field]:value})

    //Forma 2
    this.user.update(current => {
      switch(field){
      case 'email':
        current.email = value; 
        break;
      case 'last_name':
        current.last_name = value;
        break;
      case 'first_name':
        current.first_name = value;  
        break;
      }
      
      return current;
    })
  }

}
