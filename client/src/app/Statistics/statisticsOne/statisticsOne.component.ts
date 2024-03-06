import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

@Component({
  selector: 'app-statisticsOne',
  templateUrl: './statisticsOne.component.html',
  styleUrls: ['./statisticsOne.component.css'],
})
export class StatisticsOneComponent implements OnInit {
  barChart: Chart<'bar', any, unknown>;
  lijnhoogte1 = 12;
  lijnhoogte2 = 22;


  constructor() {}

  ngOnInit() {
    var typescriptData: any = [
      { key: 'Marcel', value: 10 },
      { key: 'Pim', value: 15 },
      { key: 'Mieke', value: 20 },
    ];



    /*  const d: ChartData <'bar',{key: string, value: number} []> = {
      datasets:[{
        data: typescriptData,
        parsing: {
          xAxisKey: 'key',
          yAxisKey: 'value'
        }
      }]
    }; */

    this.barChart = new Chart('stat01', {
      type: 'bar',
      data: {
        datasets: [
          {
            label:'Test',
            data: typescriptData,
            parsing: {
              xAxisKey: 'key',
              yAxisKey: 'value',
            },
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
