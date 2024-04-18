import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../Environments/Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario : string | undefined;
  contrasernia : string | undefined;
  private myAppUrl: string;
  private myApiUrl: string;
  estaLogeado : boolean = false;

  constructor(private http: HttpClient) {
    this.myAppUrl = Environment.endpoint;
    this.myApiUrl = 'login';
   }

   getUser() : Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
   }

}
