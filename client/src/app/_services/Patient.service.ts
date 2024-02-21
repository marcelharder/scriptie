import { Injectable } from '@angular/core';
import { Patient } from '../_models/patient';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getListOfPatients() {return this.http.get<Patient[]>(this.baseUrl + "getPatientList");}

  getSpecificPatient(id: number){return this.http.get<Patient>(this.baseUrl + id)}

  updatePatient(p: Patient){return this.http.put<string>(this.baseUrl,p)}
    
  addPatient(){return this.http.post<Patient>(this.baseUrl, null)}



}
