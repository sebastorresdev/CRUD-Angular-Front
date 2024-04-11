import { Injectable } from '@angular/core';
import { Environment } from '../../Environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAutor } from '../interfaces/IAutor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http : HttpClient) { 
    this.myAppUrl = Environment.endpoint;
    this.myApiUrl = 'autor';
  }

  getListaAutores() :Observable<IAutor[]> {
    return this.http.get<IAutor[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getAutor(id : number) : Observable<IAutor> {
    return this.http.get<IAutor>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
  
  updateAutor(id : number, autor:IAutor) : Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}`, autor);
  }

  saveAutor(autor : IAutor) : Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, autor);
  }

  deleteAutor(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
