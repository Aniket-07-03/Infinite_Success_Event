import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  createEvent(event: any) {
    return this.http.post(this.apiUrl, event);
  }

  getEvent():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  checkEventNameExists(name: string): Observable<boolean> {
    return this.http.get<{ exists: boolean }>(`${this.apiUrl}/exists?name=${name}`).pipe(
      map(response => response.exists),
      catchError(() => of(false)) // Return false if an error occurs
    );
  }
  getEventById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
