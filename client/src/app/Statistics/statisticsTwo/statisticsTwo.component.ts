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

  chartOptions = {
    responsive: true
  };

  chartData = [
    {
      data: [330, 600, 260, 700,330, 600, 260, 700],
      label: 'Coal and Steel'
    },
    {
      data: [120, 455, 100, 340,120, 455, 100, 340],
      label: 'Global Initiative'
    }
   
  ];


}
