import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:3000/users';
  private employerUrl = 'http://localhost:3000/employers';
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(this.apiUrl, user);
  }
  registerEmployer(user: any): Observable<any> {
    return this.http.post(this.employerUrl, user);
  }
}
