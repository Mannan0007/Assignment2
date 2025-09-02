import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ use HttpClient, not HttpClientModule
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:3000/users'; // mock endpoint

  constructor(private http: HttpClient) {} // ✅ inject HttpClient

  register(user: any) {
    return this.http.post(this.apiUrl, user);
  }
}
