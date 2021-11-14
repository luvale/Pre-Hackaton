import { Component, OnInit } from '@angular/core';
import 'ag-grid-community/dist/styles/ag-grid.css';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  options:any;
  otherOptions:any;
  myTheme:any;
  chartThemeOverrides:any;
  chartOption:any;
  
  constructor() {
    
  this.options = {
    color: [
      '#006CA2',
      '#00B199',
      '#B3B415',
      '#C4C4C4',
      'rgb(255, 205, 86)'
    ],
    /*
    title: {
      text: 'Nightingale\'s Rose Diagram',
      subtext: 'Mocking Data',
      x: 'center'
    },*/
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['Entel', 'Cómete', 'Esta', 'ctmr', 'gisselteamo']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'Entel' },
          { value: 5, name: 'Cómete' },
          { value: 15, name: 'Esta' },
          { value: 25, name: 'ctmr' },
          { value: 25, name: 'gisselteamo' },
        ]
      }
    ]
  };

    const myTheme = {
      baseTheme: 'ag-default',
      palette: {
        fills: ['#006CA2', '#00B199', '#B3B415'],
        strokes: ['white'],
      },
      overrides: {
        cartesian: {
          title: { fontSize: 50 },
          series: {
            column: {
              label: {
                enabled: true,
                color: 'black',
              },
            },
          },
        },
      },
    };

    this.otherOptions = {
      theme: myTheme,
      data: [
        
        {
          os: 'Entel',
          share: 22.5,
        },
        {
          os: 'Cómete',
          share: 6.8,
        },
        {
          os: 'Esta',
          share: 1.9,
        },
       
      ],
      series: [
        {
          type: 'pie',
          labelKey: 'os',
          angleKey: 'share',
          innerRadiusOffset: -80,
        },
      ],
    };
    
    this.chartThemeOverrides = {
      pie: {
        series: {
          highlightStyle: {
            item: {
              fill: 'red',
              stroke: 'yellow',
            }
          }
        }
      }
    };

    
  }

  ngOnInit(): void {

  }

}
