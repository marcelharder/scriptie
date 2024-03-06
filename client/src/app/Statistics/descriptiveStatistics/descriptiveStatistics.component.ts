import { Component, OnInit } from '@angular/core';
import { StatisticsSummary } from 'src/app/_models/statisticsSummary';
import { StatisticsService } from 'src/app/_services/statistics.service';

@Component({
  selector: 'app-descriptiveStatistics',
  templateUrl: './descriptiveStatistics.component.html',
  styleUrls: ['./descriptiveStatistics.component.css'],
})
export class DescriptiveStatisticsComponent implements OnInit {
  test: StatisticsSummary;

  constructor(private statis: StatisticsService) {}

  ngOnInit() {
    this.getStatisticalSummary();
  }

  getStatisticalSummary() {
    this.statis.getSummary().subscribe((next) => {
      this.test = next;
      
    });
  }
}
