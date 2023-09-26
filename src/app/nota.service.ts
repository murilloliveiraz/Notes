import { Nota } from './components/notas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private readonly API = 'http://localhost:3000/notas'
  constructor(private http:HttpClient) {
  }

  listar() {
    return this.http.get<Nota[]>(this.API)
  }
}
