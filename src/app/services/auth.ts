import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  // private apiUrl = 'http://localhost:3000/users';
  // private employerUrl = 'http://localhost:3000/employers';
  // private baseUrl = 'https://dev4.ahcthix.com/ICHRA-CP-API/api/public';
  private baseUrl = 'https://cd7b6dbcaeab.ngrok-free.app/ICHRA-CP-API/api/public';

  constructor(private http: HttpClient) {}

  // register(user: any) {
  //   return this.http.post(this.apiUrl, user);
  // }
  // registerEmployer(user: any): Observable<any> {
  //   return this.http.post(this.employerUrl, user);
  // }

  // register(user: any) {
  //   return this.http.post(`${this.baseUrl}/register`, user);
  // }
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  registerEmployer(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }
}
