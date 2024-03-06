import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

@Component({
  selector: 'app-statistics-three',
  templateUrl: './statistics-three.component.html',
  styleUrls: ['./statistics-three.component.css'],
})
export class StatisticsThreeComponent implements OnInit {
  scatterChart: Chart<'scatter', { x: number; y: number }[], unknown>;
  lijnhoogte1 = 5;
  lijnhoogte2 = 8;

  constructor() {}

  ngOnInit(): void {

    
    this.scatterChart = new Chart('stat03', {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            pointBackgroundColor: [
              'yellow',
              'blue',
              'red',
              'green',
              'orange',
              'indigo',
            ],
            data: [
              { x: -10, y: 0 },
              { x: 0, y: 10 },
              { x: 3, y: 8 },
              { x: 1, y: 4 },
              { x: 9, y: 1 },
              { x: -1, y: 5 },
            ],
          },
        ],
      },
      options: {
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: this.lijnhoogte1,
                yMax: this.lijnhoogte1,
                borderColor: 'green',
                borderWidth: 2,
              },
              line2: {
                type: 'line',
                yMin: this.lijnhoogte2,
                yMax: this.lijnhoogte2,
                borderColor: 'red',
                borderWidth: 2,
              },
            },
          },
        },
      },
    });
  }
}
