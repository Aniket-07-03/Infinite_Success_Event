import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface signUp {
  username: string;
  email: string;
  mobileNumber : string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registerUser(user: signUp[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }


  loginUser(user:any):Observable<any>{
    return this.http.get(this.apiUrl,user)
  }


}
