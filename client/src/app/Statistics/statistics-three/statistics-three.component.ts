import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import { scatterPoint } from 'src/app/_models/scatterPoint';
import { StatisticsService } from 'src/app/_services/statistics.service';

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
  data: Array<scatterPoint> = [];

  constructor(private statis: StatisticsService) {}

  ngOnInit(): void {
    this.statis.getScatter().subscribe((next) => {
      this.data = next;
      this.scatterChart = new Chart('stat03', {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Scatter Dataset',
              pointBackgroundColor: ['yellow', 'blue'],
              data: this.data,
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
    });
  }
}
