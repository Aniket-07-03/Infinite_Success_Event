import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';


export interface SignUp {
  username: string;
  email: string;
  mobileNumber: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class MemberRegisterService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  login(email?: string, mobileNumber?: string, password?: string): Observable<boolean> {
    return this.http.get<SignUp[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u =>
          (email ? u.email === email : u.mobileNumber === mobileNumber) && u.password === password
        );

        if (user) {
          // Store the logged-in user in localStorage
          try {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
          } catch (error) {
            console.error('LocalStorage set error:', error);
            return false; // Return false if storing fails
          }
          return true; // User found and stored
        } else {
          return false; // User not found
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false); // Return an observable of false on error
      })
    );
  }

  getLoggedInUser() {
    try {
      const user = localStorage.getItem('loggedInUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('LocalStorage get error:', error);
      return null;
    }
  }

  logout() {
    try {
      localStorage.removeItem('loggedInUser');
    } catch (error) {
      console.error('LocalStorage remove error:', error);
    }
  }
}
