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

    /*         {
          label: 'line5',
          data: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
          backgroundColor: 'rgba(75,10,125,.5)',
          borderColor: 'rgb(75,10,125)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'line6',
          data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
          backgroundColor: 'rgba(75,10,125,.5)',
          borderColor: 'rgb(75,10,125)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'line7',
          data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
          backgroundColor: 'rgba(75,10,125,.5)',
          borderColor: 'rgb(75,10,125)',
          fill: false,
          lineTension: 0,
          radius: 5,
        }, */

    /*       '06:00',
        '06:30',
        '07:00',
        '07:30',
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '22:30',
        '23:00',
        '24:30',
        '00:00', */

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
          label: 'Geração Verificada',
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
          label: 'PDP ONS',
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
        /*   {
          label: 'PDP + Devio',
          data:[
            {x:'00:30',y:100},
            {x:'01:00',y:100},
            {x:'02:30',y:100},
            {x:'00:30',y:100},
            {x:'00:30',y:100}
          ],
          //data: [100, 100, 101, 100, 100, 100, 100, 100, 100, 100, 100],
          backgroundColor: '#FFB179',
          borderDash: [10, 10],
          borderColor: '#FFB179',
          fill: false,
          lineTension: 0,
          radius: 0,
        } */
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
