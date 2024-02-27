import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statisticsTwo',
  templateUrl: './statisticsTwo.component.html',
  styleUrls: ['./statisticsTwo.component.css']
})
export class StatisticsTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chartLabels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ];

  chartOptions = { responsive: true };

  chartData = [
    {
      data: [33, 60, 26, 70, 33, 60, 26, 70],
      label: 'Coal and Steel'
    },
    {
      data: [12, 45, 15, 34, 12, 45, 20, 34],
      label: 'Global Initiative'
    }
   
  ];


}
