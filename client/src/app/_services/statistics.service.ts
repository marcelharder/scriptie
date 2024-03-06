import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StatisticsSummary } from '../_models/statisticsSummary';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getSummary() {return this.http.get<StatisticsSummary>(this.baseUrl + "getStatisticalSummary");}








}
