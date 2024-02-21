import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { gli } from '../_models/gli';

@Injectable({
  providedIn: 'root'
})
export class GliService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getSpecificGli(id: number) { return this.http.get<gli>(this.baseUrl + id) }

  updateGli(p: gli) { return this.http.put<string>(this.baseUrl, p) }

  addGli() { return this.http.post<gli>(this.baseUrl, null) }

}
