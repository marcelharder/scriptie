import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descriptiveStatistics',
  templateUrl: './descriptiveStatistics.component.html',
  styleUrls: ['./descriptiveStatistics.component.css']
})
export class DescriptiveStatisticsComponent implements OnInit {
  numberOfPatients=8;
  MeanAge = 56;
  MeanSD = 2;
  MaleNo = 3;
  FemaleNo = 5;
  constructor() { }

  ngOnInit() {
  }

}
