import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
// import * as chartData from './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // If ctx does not work, get canvas via ViewChild()

  dataArray: any = [];

  ngOnInit() {}

  ngAfterViewInit() {
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;

    // Stackblitz no longer supports local json files.
    // Uncomment below and use import at top.
    // Replace datasets with this.dataArray

    // for (let key in chartData.items) {
    //   if (chartData.items.hasOwnProperty(key)) {
    //     this.dataArray.push(chartData.items[key]);
    //   }
    // }

    data = {
      /* labels: [
        '00:30',
        '01:00',
        '01:30',
        '02:00',
        '02:30',
        '03:00',
        '03:30',
        '04:00',
        '04:30',
        '05:00',
        '05:30',
      ] */

      datasets: [
        {
          label: 'TempoAtual',
          data: [
            { x: '00:30', y: null },
            { x: '01:00', y: null },
            { x: '01:30', y: null },
            { x: '02:00', y: null },
            { x: '02:30', y: 120 },
            { x: '02:30', y: 110, label: 'de' },
            { x: '02:30', y: 0 },
          ],
          //data: [null,null,120],
          backgroundColor: 'red',
          borderColor: 'red',
          //fill: false,
          //lineTension: 0,
          //radius: 5,
          //type: 'bar',
          borderWidth: 1,
        },
        {
          label: 'Line1',
          data: [
            { x: '00:30', y: 120 },
            { x: '01:00', y: 120 },
            { x: '02:00', y: 120 },
            { x: '02:30', y: 120 },
            { x: '03:00', y: 120 },
          ],
          //data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
          backgroundColor: '#1AB393',
          borderColor: '#1AB393',
          fill: false,
          lineTension: 0,
          radius: 1,
        },
        {
          label: 'Line2',
          data: [
            { x: '00:30', y: 110 },
            { x: '01:00', y: 110 },
            { x: '02:00', y: 110 },
            { x: '02:30', y: 110 },
            { x: '03:00', y: 110 },
          ],
          //data: [110, 110, 111, 110, 110, 110, 110, 110, 110, 110, 110],
          backgroundColor: '#89BAB0',
          borderColor: '#89BAB0',
          borderDash: [10, 10],
          fill: false,
          lineTension: 0,
          radius: 1,
        },
      ],
    };

    options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: 'Apples to Oranges',
        fontSize: 12,
        fontColor: '#666',
      },
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontColor: '#999',
          fontSize: 14,
        },
      },
    };

    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}
