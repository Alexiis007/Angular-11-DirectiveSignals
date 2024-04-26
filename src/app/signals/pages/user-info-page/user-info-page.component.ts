import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{
  private userService = inject(UserService);

  public userId = signal(1);
  
  public currentUser = signal<User | undefined>(undefined)

  public userWasFound = signal(true);

  public fullName = computed(()=>{
    if(!this.currentUser()) return 'Usuario No Encontrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`
  })

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  public loadUser(id:number){ 
    if(id<=0) return;

    this.userId.set(id)

    this.currentUser.set(undefined)

    this.userService.getUserById(id)
    .subscribe({
      next:(value) => {
        this.currentUser.set(value);
        this.userWasFound.set(true)
      },
      error:()=>{
        this.userWasFound.set(false)
        this.currentUser.set(undefined)
      }
    })
  }
}
