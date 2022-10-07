import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signIn, User } from '../interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlBase: string = 'https://localhost:44360/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  SignIn(request: signIn): Observable<any>{
    let url: string = `${this.urlBase}api/Account`;
    return this.http.post<any>(url, request, this.httpOptions);
  }

  SignUp(request:User): Observable<any>{
    let url: string = `${this.urlBase}api/User`;
    return <any>this.http.post(url, request, this.httpOptions);
  }
}
