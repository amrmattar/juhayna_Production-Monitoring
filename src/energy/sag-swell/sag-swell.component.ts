import { Component, OnInit,  ViewChild } from '@angular/core';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid
} from "ng-apexcharts";
import {MatMenuModule} from '@angular/material/menu';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};
@Component({
  selector: 'app-sag-swell',
  templateUrl: './sag-swell.component.html',
  styleUrls: ['./sag-swell.component.css']
})
export class SagSwellComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  lineChartVisiable= true;
  tableVisisable = false;
  BarVisisable = false;
  functionRender = true;
  factoryRender = false;
  loadRender = false;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "north",
          data: [
            {
              x: 1996,
              y: 322
            },
            {
              x: 1997,
              y: 324
            },
            {
              x: 1998,
              y: 329
            },
            {
              x: 1999,
              y: 342
            },
            {
              x: 2000,
              y: 348
            },
            {
              x: 2001,
              y: 334
            },
            {
              x: 2002,
              y: 325
            },
            {
              x: 2003,
              y: 316
            },
            {
              x: 2004,
              y: 318
            },
            {
              x: 2005,
              y: 330
            },
            {
              x: 2006,
              y: 355
            },
            {
              x: 2007,
              y: 366
            },
            {
              x: 2008,
              y: 337
            },
            {
              x: 2009,
              y: 352
            },
            {
              x: 2010,
              y: 377
            },
            {
              x: 2011,
              y: 383
            },
            {
              x: 2012,
              y: 344
            },
            {
              x: 2013,
              y: 366
            },
            {
              x: 2014,
              y: 389
            },
            {
              x: 2015,
              y: 334
            }
          ]
        }
      ],
      chart: {
        type: "area",
        height: 100,
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ",",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              }
            },
            svg: {
              filename: undefined
            },
            png: {
              filename: undefined
            }
          },
          autoSelected: "zoom"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          style: {

          },
          offsetY: -7,
          offsetX: 0
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 0.5
      },
      tooltip: {
        x: {
          format: "yyyy"
        },
        fixed: {
          enabled: false,
          position: "topRight"
        }
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30
          }
        },
        padding: {
          left: 20
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "stepline"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
    this.chartOptions3 = {
      series: [
        {
          name: "factory1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "factory2",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "factory3",
          data: [10, 41, 35, 51, 49, 62, 69]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "stepline"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.chartOptions4 = {
      series: [
        {
          name: "Energy Consumption",
          data: [44, 55, 57]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },

      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Factory 1",
          "Factory 2",
          "Factory 3"
        ]
      },
      yaxis: {
        title: {
          text: "KWH"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return  + val + " KWH";
          }
        }
      }
    };

  }

  ngOnInit(): void {
  }
  changeTab(tab)
  {
    if(tab.index == 0)
    {
      this.lineChartVisiable = true;
      this.tableVisisable = false;
      this.BarVisisable = false;
    }
    else if(tab.index == 2){
      this.lineChartVisiable = false;
      this.tableVisisable = true;
      this.BarVisisable = false;
    }
    else if(tab.index == 1){
      this.lineChartVisiable = false;
      this.tableVisisable = false;
      this.BarVisisable = true;
    }
  }
}
