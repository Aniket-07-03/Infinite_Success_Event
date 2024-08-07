import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { signUp } from './register.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient, private router:Router) { }

  userSignUp(user:signUp){
    this.http.post('http://localhost:3000/users',user,{observe:'response'})
    .subscribe((result)=>{
     if(result){
       localStorage.setItem('user',JSON.stringify(result.body));
       console.log(localStorage.setItem)
       this.router.navigate(['/member-login']);
     }
     
    })
}






getCurrentUser(): Observable<any> {
  return this.http.get(`${this.apiUrl}/current`);
}

updateUserProfile(user: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/update`, user);
}
}