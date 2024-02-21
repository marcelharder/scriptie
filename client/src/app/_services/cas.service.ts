import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CAS } from '../_models/cas';

@Injectable({
  providedIn: 'root'
})
export class CasService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getSpecificCas(id: number) { return this.http.get<CAS>(this.baseUrl + id) }

  updateCas(p: CAS) { return this.http.put<string>(this.baseUrl, p) }

  addCas() { return this.http.post<CAS>(this.baseUrl, null) }

}
