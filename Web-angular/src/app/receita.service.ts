import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Receita } from './Receita'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private url = 'http://localhost:5000/api/Receita';  
  
  constructor(
    private http: HttpClient
  ) { }

  public create(newReceita: any): Observable<any> {
    return this.http.post(this.url, newReceita, httpOptions);
  }

  public retrievetById(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.url}/${id}`);
  }

  public retrieveAll(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.url);
  }

  public update(udatedReceita: Receita): Observable<Receita> {
    return this.http.put<Receita>(this.url, udatedReceita, httpOptions);
  }

  public delete(id: string): Observable<number> {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
}