import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signIn, User } from '../interfaces/user';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseModel } from '../interfaces/response-model';
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

  errorHandler(error: HttpErrorResponse){
    let errorMessage = `Error Code: ${error.status}`;
    if(error.status != 200){
      errorMessage = `${errorMessage} \n message: ${error.error.message}`
    }
    if(error.error instanceof ErrorEvent){
      errorMessage = `errorMessage \n message: ${error.error.message}`
    }
    if(error.error.hasError && error.status == 200){
      errorMessage = `message: ${error.error.message}`
    }
    return throwError(errorMessage);
  }

  SignIn(request: signIn): Observable<ResponseModel<any>>{
    let url: string = `${this.urlBase}api/Account`;
    return this.http.post<ResponseModel<any>>(url, request, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  SignUp(request:User): Observable<ResponseModel<any>>{
    let url: string = `${this.urlBase}api/User`;
    return <any>this.http.post<ResponseModel<any>>(url, request, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
}
