import { Component, signal } from '@angular/core';

interface MenuItems {
  name:string,
  rutas:string
}

@Component({
  selector: 'signals-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  public menuItems = signal<MenuItems[]>([
    {name:'counter',rutas:'counter'},
    {name:'user-info',rutas:'user-info'},
    {name:'properties',rutas:'properties'},
  ])
}
