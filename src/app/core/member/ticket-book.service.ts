import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketBookService {
  private apiUrl = 'http://localhost:3000/ticket';

  constructor(private http: HttpClient) {}

  // Save form data to db.json
  saveRegistration(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Get all registrations (not used in this example, but useful for future features)
  getRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get registration by ID (if needed)
  getRegistration(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
