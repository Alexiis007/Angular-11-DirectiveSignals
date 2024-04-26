import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SingleUserRequest, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private baseURL = 'https://reqres.in/api/users'

  public getUserById(id : number):Observable<User>{
    return this.http.get<SingleUserRequest>(`${this.baseURL}/${id}`)
    .pipe(
      map(res => res.data)
    )
  }
}
