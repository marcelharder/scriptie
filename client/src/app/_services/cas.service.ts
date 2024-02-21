import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cas } from '../_models/cas';

@Injectable({
  providedIn: 'root'
})
export class CasService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getSpecificCas(id: number) { return this.http.get<cas>(this.baseUrl + id) }

  updateCas(p: cas) { return this.http.put<string>(this.baseUrl, p) }

  addCas() { return this.http.post<cas>(this.baseUrl, null) }

}
