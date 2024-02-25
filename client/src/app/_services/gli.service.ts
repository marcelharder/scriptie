import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GLI } from '../_models/gli';

@Injectable({
  providedIn: 'root'
})
export class GliService {
 
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getSpecificGli(id: number) { return this.http.get<GLI>(this.baseUrl + id) }

  updateGli(p: GLI) { return this.http.put<string>(this.baseUrl, p) }

  addGli() { return this.http.post<GLI>(this.baseUrl, null) }

  calculateGli(id: number) {  return this.http.get<GLI>(this.baseUrl + "calculateGli/" + id) }

}
