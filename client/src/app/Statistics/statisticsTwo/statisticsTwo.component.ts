import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statisticsTwo',
  templateUrl: './statisticsTwo.component.html',
  styleUrls: ['./statisticsTwo.component.css']
})
export class StatisticsTwoComponent implements OnInit {
  lineChart: Chart<"line", { January: number; February: number; }, unknown>;
 
  
  constructor() { }

  ngOnInit() {
    this.lineChart = new Chart('stat02',{
      type: 'line',
      data:{
        datasets: [{
          label:'Included patients',
          data:{January: 10, February:20,March: 30, April: 8,May: 15, June:34,July: 8, August:7,September: 20, October:30,November: 25, December:6,},
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.5
        }]
      }
    });
  }
  

}
