import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberRegisterService {
  private apiUrl = 'http://localhost:3000/members';

  constructor(private http: HttpClient) {}

  createMember(member:any) {
    return this.http.post(this.apiUrl,member);
  }


  login(email: string | null, mobileNumber: string | null, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(user =>
          (user.email === email || user.mobileNumber === mobileNumber) &&
          user.password === password
        );
        return user !== undefined;
      })
    );
  }

}
