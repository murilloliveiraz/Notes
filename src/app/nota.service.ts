import { Nota } from './components/notas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private readonly API = 'http://localhost:3000/notas'
  constructor(private http:HttpClient) {
  }

  listar(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.API)
  }

  criar(nota: Nota): Observable<Nota>{
    return this.http.post<Nota>(this.API, nota)
  } 
}
