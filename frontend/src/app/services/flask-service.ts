import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FlaskService {
  constructor(private http: HttpClient) {}
getProfilo() {
  return this.http.get('QUA CI VA L URL CON L ENDPOINT');
  }
}
