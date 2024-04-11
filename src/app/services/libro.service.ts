import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../Environments/Environment';
import { Observable } from 'rxjs';
import { ILibro } from '../interfaces/ILibro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = Environment.endpoint;
    this.myApiUrl = 'libro';
  }

  getListaLibros() : Observable<ILibro[]> {
    return this.http.get<ILibro[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getLibro(id:number) : Observable<ILibro> {
    return this.http.get<ILibro>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  updateLibro(id : number, libro:ILibro) : Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}`, libro);
  }

  saveLibro(libro:ILibro) : Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, libro);
  }

  deleteLibro(id:number) : Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
