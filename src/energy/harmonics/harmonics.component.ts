import { Component, OnInit, ViewChild } from '@angular/core';

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
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
  ApexLegend,
} from 'ng-apexcharts';
import { MatMenuModule } from '@angular/material/menu';
import { HarmonicsService } from 'src/services/harmonics.service';
import { HttpClient } from '@angular/common/http';
import { PFService } from '../services/power-factor/power-factor.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';

export type ChartOptions = {
  chart: ApexChart;
  annotations: ApexAnnotations;
  colors: string[];
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries|any;
  stroke: ApexStroke;
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  states: ApexStates;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
};

export interface chartbar {
  name: string;
  data: number[];
}

@Component({
  selector: 'app-harmonics',
  templateUrl: './harmonics.component.html',
  styleUrls: ['./harmonics.component.css'],
})
export class HarmonicsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public functionsBar: Partial<ChartOptions>;
  public loadBar: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  public allFunctionsChart: Partial<ChartOptions>;
  public functionChart: Partial<ChartOptions>;
  public allFunctionsBar: Partial<ChartOptions>;
  public allLoadsBar: Partial<ChartOptions>;
  public loadLine: Partial<ChartOptions>;
  public loadLinePhases: Partial<ChartOptions>;
  public pieLoads: Partial<ChartOptions>;
  public pieCurrent: Partial<ChartOptions>;
  public pieVoltage: Partial<ChartOptions>;
  public pieFunctions: Partial<ChartOptions>;
  selectedTabIndex;
  selectedTabIndex2;
  featureName: boolean;





  lineChartVisiable = true;
  tableVisisable = false;
  BarVisisable = false;
  functionRender = true;
  factoryRender = false;
  loadRender = false;
  oneFunctionRender = false;
  oneLoadRender = false;
  lineChartData = null;
  functionChartData = null;
  oneBarChartData = null;
  barData = null;
  loadlineData = null;
  pieLoadData= null;
  message:any;
  areaRender=null;
  areaName=null;

  dateControl = new FormControl('');
  dateControl2 = new FormControl('');
  From:any;
  To:any;


  loads = [];
  menuFunctions = [];

  tableData = [];

  funcId = 0;

  tabIndex = 0;

  avgTHDi=null;
  avgTHDv=null;
  maxTHDv=null;
  minTHDv=null;
  maxTHDi=null;
  minTHDi=null;

  maxTHDvName=null;
  minTHDvName=null;
  maxTHDiName=null;
  minTHDiName=null;


  avgTHDi1=null;
  avgTHDv1=null;
  maxTHDv1=null;
  minTHDv1=null;
  maxTHDi1=null;
  minTHDi1=null;

  avgTHDi2=null;
  avgTHDv2=null;
  maxTHDv2=null;
  minTHDv2=null;
  maxTHDi2=null;
  minTHDi2=null;

  avgTHDi3=null;
  avgTHDv3=null;
  maxTHDv3=null;
  minTHDv3=null;
  maxTHDi3=null;
  minTHDi3=null;

  loadName = null;
  functionName = null;
  anotherName = null;
  anotherMax = null;
  barChartData = null;
  areas:any;
  onTabClick(index) {
    this.tabIndex = index;
  }
  tabIndex2 = 0;
  onTabClick2(index) {
    this.tabIndex2 = index;
  }

  ngOnInit(): void {
    this.getAllFunctionsDefault();
    this.getAllLoads();
    this.getAllFunctions();
    this.getAllAreasLoads();
  }


  constructor(private service: HarmonicsService, private http: HttpClient) {
    this.pieFunctions = {
      series: [],
      chart: {
        width: 450,
        type: 'pie',
      },
      labels: [],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    };
    this.pieLoads = {
      series: [],
      chart: {
        width: 550,
        type: 'pie',
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.functionsBar = {
      series: [
        {
          name: "HI",
          data: []
        },
        {
          name: "HV",
          data: []
        },

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",

        }
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
          "H3",
          "H5",
          "H7",
          "H9",
          "H11",
          "H13",
        ]
      },
      yaxis: {
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return  val + " %";
          }
        }
      }
    };
    this.loadBar = {
      series: [
        {
          name: "HI",
          data: []
        },
        {
          name: "HV",
          data: []
        },

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",

        }
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
          "H3 Phase 1",
          "H3 Phase 2",
          "H3 Phase 3",
          "H5 Phase 1",
          "H5 Phase 2",
          "H5 Phase 3",
          "H7 Phase 1",
          "H7 Phase 2",
          "H7 Phase 3",
          "H9 Phase 1",
          "H9 Phase 2",
          "H9 Phase 3",
          "H11 Phase 1",
          "H11 Phase 2",
          "H11 Phase 3",
          "H13 Phase 1",
          "H13 Phase 2",
          "H13 Phase 3",
        ]
      },
      yaxis: {
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return  val + " %";
          }
        }
      }
    };
    this.pieCurrent  = {
      series: [],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Harmonic 3", "Harmonic 5", "Harmonic 7", "Harmonic 09", "Harmonic 11", "Harmonic 13"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.pieVoltage  = {
      series: [],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Harmonic 3", "Harmonic 5", "Harmonic 7", "Harmonic 09", "Harmonic 11", "Harmonic 13"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartOptions3 = {
      series: [
        {
          name: "Hrmonic11",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "",
          data: [50, 41, 35, 17, 49, 55, 69, 100, 148]
        },
        {
          name: "",
          data: [50, 39, 17, 17, 80, 55, 50, 100, 148]
        },
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
        curve: "straight"
      },
      title: {

        align: "left"
      },
      grid: {
        row: {
          colors: [ "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "20Jan",
          "21Jan",
          "22Jan",
          "23Jan",
          "24Jan",
          "25Jan",
          "26Jan",
          "27Jan",
          "28Jan"
        ]
      }
    };
    this.chartOptions4 = {
      series: [
        {
          name: 'Energy Consumption',
          data: [44, 55, 57],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Factory 1', 'Factory 2', 'Factory 3'],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + ' ';
          },
        },
      },
    };
    this.allFunctionsChart = {
      series: [],
      colors: ['#FF9800', '#111d5e', '#c70039', '#c0e218'],
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
      },
    };
    this.functionChart = {
      series: [
        {
          name: 'Function',
          data: [],
        },
      ],
      colors: ['#FF9800'],
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
      },
    };
    this.allFunctionsBar = {
      series: [],
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#FF9800', '#111d5e', '#c70039', '#c0e218'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + ' ';
          },
        },
      },
    };
    this.allLoadsBar = {
      series: [],
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#FF9800', '#111d5e', '#c70039', '#c0e218'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + ' ';
          },
        },
      },
    };
    this.loadLine = {
      series: [
        {
          name: '',
          data: [],
        },
      ],
      colors: ['#FF9800'],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
      },
    };
    this.loadLinePhases = {
      series: [
        {
          name: 'Phase 1',
          data: [],
        },
        {
          name: 'Phase 2',
          data: [],
        },
        {
          name: 'Phase 3',
          data: [],
        },
      ],
      colors: ['#FF9800'],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
      },
    };
  }
  getAllLoads() {
    this.http.get(`${environment.servicesUrl}/Loads`).subscribe((Response) => {
      this.loads = JSON.parse(JSON.stringify(Response));
      // this.routeSummary = data.routeSummary;
      //this.processesSummaryList = data.processesSummaryList;
    });
  }
  getAllFunctions() {
    this.http
      .get(`${environment.servicesUrl}/Functions`)
      .subscribe((Response) => {
        this.menuFunctions = JSON.parse(JSON.stringify(Response));
        // this.routeSummary = data.routeSummary;
        //this.processesSummaryList = data.processesSummaryList;
      });
  }
  getAllAreasLoads() {
    this.http.get(`${environment.servicesUrl}/Loads/Areas`).subscribe((Response) => {
      this.areas = JSON.parse(JSON.stringify(Response));
      // this.routeSummary = data.routeSummary;
      //this.processesSummaryList = data.processesSummaryList;
    });
  }

  getAllFunctionsDefault() {
    this.lineChartData = null;
    this.functionsBar.series[0].data = [];
    this.functionsBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.service.getTHDFunctions(1).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi=thd.avgTHDi;
        this.avgTHDv=thd.avgTHDv;
        this.maxTHDv=thd.maxTHDv;
        this.minTHDv=thd.minTHDv;
        this.maxTHDi=thd.maxTHDi;
        this.minTHDi=thd.minTHDi;
        this.maxTHDvName=thd.maxTHDvFunctionName;
        this.minTHDvName=thd.minTHDvFunctionName;
        this.maxTHDiName=thd.maxTHDiName;
        this.minTHDiName=thd.minTHDiName;
        this.functionsBar.series[0].data.push(thd.harmonic3I.toFixed(2),thd.harmonic5I.toFixed(2),thd.harmonic7I.toFixed(2),thd.harmonic9I.toFixed(2),thd.harmonic11I.toFixed(2),thd.harmonic13I.toFixed(2));
        this.functionsBar.series[1].data.push(thd.harmonic3V.toFixed(2),thd.harmonic5V.toFixed(2),thd.harmonic7V.toFixed(2),thd.harmonic9V.toFixed(2),thd.harmonic11V.toFixed(2),thd.harmonic13V.toFixed(2));

        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.lineChartData = this.functionsBar.series;
    });
  }
  getAllFunctionDefault(funcId) {
    this.lineChartData = null;
    this.functionsBar.series[0].data = [];
    this.functionsBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.avgTHDi=null;
    this.avgTHDv=null;
    this.maxTHDv=null;
    this.minTHDi=null;
    this.minTHDv=null;
    this.maxTHDi=null;
    this.service.getTHDFunction(funcId,1).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi=thd.avgTHDi;
        this.avgTHDv=thd.avgTHDv;
        this.maxTHDv=thd.maxTHDv;
        this.minTHDv=thd.minTHDv;
        this.maxTHDi=thd.maxTHDi;
        this.minTHDi=thd.minTHDi;
        this.functionsBar.series[0].data.push(thd.harmonic3I.toFixed(2),thd.harmonic5I.toFixed(2),thd.harmonic7I.toFixed(2),thd.harmonic9I.toFixed(2),thd.harmonic11I.toFixed(2),thd.harmonic13I.toFixed(2));
        this.functionsBar.series[1].data.push(thd.harmonic3V.toFixed(2),thd.harmonic5V.toFixed(2),thd.harmonic7V.toFixed(2),thd.harmonic9V.toFixed(2),thd.harmonic11V.toFixed(2),thd.harmonic13V.toFixed(2));

        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.lineChartData = this.functionsBar.series;
    });
  }
  getLoadDefault(loadId) {
    this.barChartData = null;
    this.loadBar.series[0].data = [];
    this.loadBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.service.getTHDLoad(loadId,1).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi1=thd.avgTHDi1;
        this.avgTHDv1=thd.avgTHDv1;
        this.maxTHDv1=thd.maxTHDv1;
        this.minTHDv1=thd.minTHDv1;
        this.maxTHDi1=thd.maxTHDi1;
        this.minTHDi1=thd.minTHDi1;

        this.avgTHDi2=thd.avgTHDi2;
        this.avgTHDv2=thd.avgTHDv2;
        this.maxTHDv2=thd.maxTHDv2;
        this.minTHDv2=thd.minTHDv2;
        this.maxTHDi2=thd.maxTHDi2;
        this.minTHDi2=thd.minTHDi2;

        this.avgTHDi3=thd.avgTHDi3;
        this.avgTHDv3=thd.avgTHDv3;
        this.maxTHDv3=thd.maxTHDv3;
        this.minTHDv3=thd.minTHDv3;
        this.maxTHDi3=thd.maxTHDi3;
        this.minTHDi3=thd.minTHDi3;

        this.loadBar.series[0].data.push(thd.harmonic3I1.toFixed(2),thd.harmonic3I2.toFixed(2),thd.harmonic3I3.toFixed(2),thd.harmonic5I1.toFixed(2),thd.harmonic5I2.toFixed(2),thd.harmonic5I3.toFixed(2),thd.harmonic7I1.toFixed(2),thd.harmonic7I2.toFixed(2),thd.harmonic7I3.toFixed(2),thd.harmonic9I1.toFixed(2),thd.harmonic9I2.toFixed(2),thd.harmonic9I3.toFixed(2),thd.harmonic11I1.toFixed(2),thd.harmonic11I2.toFixed(2),thd.harmonic11I3.toFixed(2),thd.harmonic13I1.toFixed(2),thd.harmonic13I2.toFixed(2),thd.harmonic13I3.toFixed(2));
        this.loadBar.series[1].data.push(thd.harmonic3V1.toFixed(2),thd.harmonic3V2.toFixed(2),thd.harmonic3V3.toFixed(2),thd.harmonic5V1.toFixed(2),thd.harmonic5V2.toFixed(2),thd.harmonic5V3.toFixed(2),thd.harmonic7V1.toFixed(2),thd.harmonic7V2.toFixed(2),thd.harmonic7V3.toFixed(2),thd.harmonic9V1.toFixed(2),thd.harmonic9V2.toFixed(2),thd.harmonic9V3.toFixed(2),thd.harmonic11V1.toFixed(2),thd.harmonic11V2.toFixed(2),thd.harmonic11V3.toFixed(2),thd.harmonic13V1.toFixed(2),thd.harmonic13V2.toFixed(2),thd.harmonic13V3.toFixed(2));
        console.log(this.loadBar);
        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.barChartData = this.loadBar.series;
    });
  }
  getAllAreaDefault(funcId) {
    this.lineChartData = null;
    this.functionsBar.series[0].data = [];
    this.functionsBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.avgTHDi=null;
    this.avgTHDv=null;
    this.maxTHDv=null;
    this.minTHDi=null;
    this.minTHDv=null;
    this.maxTHDi=null;
    this.service.getTHDFunction(funcId,1).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi=thd.avgTHDi;
        this.avgTHDv=thd.avgTHDv;
        this.maxTHDv=thd.maxTHDv;
        this.minTHDv=thd.minTHDv;
        this.maxTHDi=thd.maxTHDi;
        this.minTHDi=thd.minTHDi;
        this.functionsBar.series[0].data.push(thd.harmonic3I.toFixed(2),thd.harmonic5I.toFixed(2),thd.harmonic7I.toFixed(2),thd.harmonic9I.toFixed(2),thd.harmonic11I.toFixed(2),thd.harmonic13I.toFixed(2));
        this.functionsBar.series[1].data.push(thd.harmonic3V.toFixed(2),thd.harmonic5V.toFixed(2),thd.harmonic7V.toFixed(2),thd.harmonic9V.toFixed(2),thd.harmonic11V.toFixed(2),thd.harmonic13V.toFixed(2));

        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.lineChartData = this.functionsBar.series;
    });
  }

  getAllFunctionsTime(time) {
    this.lineChartData = null;
    this.functionsBar.series[0].data = [];
    this.functionsBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.service.getTHDFunctions(time).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi=thd.avgTHDi;
        this.avgTHDv=thd.avgTHDv;
        this.maxTHDv=thd.maxTHDv;
        this.minTHDv=thd.minTHDv;
        this.maxTHDi=thd.maxTHDi;
        this.minTHDi=thd.minTHDi;
        this.functionsBar.series[0].data.push(thd.harmonic3I.toFixed(2),thd.harmonic5I.toFixed(2),thd.harmonic7I.toFixed(2),thd.harmonic9I.toFixed(2),thd.harmonic11I.toFixed(2),thd.harmonic13I.toFixed(2));
        this.functionsBar.series[1].data.push(thd.harmonic3V.toFixed(2),thd.harmonic5V.toFixed(2),thd.harmonic7V.toFixed(2),thd.harmonic9V.toFixed(2),thd.harmonic11V.toFixed(2),thd.harmonic13V.toFixed(2));

        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.lineChartData = this.functionsBar.series;
    });
  }
  getAllFunctionTime(funcId,time) {
    this.lineChartData = null;
    this.functionsBar.series[0].data = [];
    this.functionsBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.avgTHDi=null;
    this.avgTHDv=null;
    this.maxTHDv=null;
    this.minTHDi=null;
    this.minTHDv=null;
    this.maxTHDi=null;
    this.service.getTHDFunction(funcId,time).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi=thd.avgTHDi;
        this.avgTHDv=thd.avgTHDv;
        this.maxTHDv=thd.maxTHDv;
        this.minTHDv=thd.minTHDv;
        this.maxTHDi=thd.maxTHDi;
        this.minTHDi=thd.minTHDi;
        this.functionsBar.series[0].data.push(thd.harmonic3I.toFixed(2),thd.harmonic5I.toFixed(2),thd.harmonic7I.toFixed(2),thd.harmonic9I.toFixed(2),thd.harmonic11I.toFixed(2),thd.harmonic13I.toFixed(2));
        this.functionsBar.series[1].data.push(thd.harmonic3V.toFixed(2),thd.harmonic5V.toFixed(2),thd.harmonic7V.toFixed(2),thd.harmonic9V.toFixed(2),thd.harmonic11V.toFixed(2),thd.harmonic13V.toFixed(2));

        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.lineChartData = this.functionsBar.series;
    });
  }
  getAllAreaTime(funcId,time) {
    this.lineChartData = null;
    this.functionsBar.series[0].data = [];
    this.functionsBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.avgTHDi=null;
    this.avgTHDv=null;
    this.maxTHDv=null;
    this.minTHDi=null;
    this.minTHDv=null;
    this.maxTHDi=null;
    this.service.getTHDFunction(funcId,time).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi=thd.avgTHDi;
        this.avgTHDv=thd.avgTHDv;
        this.maxTHDv=thd.maxTHDv;
        this.minTHDv=thd.minTHDv;
        this.maxTHDi=thd.maxTHDi;
        this.minTHDi=thd.minTHDi;
        this.functionsBar.series[0].data.push(thd.harmonic3I.toFixed(2),thd.harmonic5I.toFixed(2),thd.harmonic7I.toFixed(2),thd.harmonic9I.toFixed(2),thd.harmonic11I.toFixed(2),thd.harmonic13I.toFixed(2));
        this.functionsBar.series[1].data.push(thd.harmonic3V.toFixed(2),thd.harmonic5V.toFixed(2),thd.harmonic7V.toFixed(2),thd.harmonic9V.toFixed(2),thd.harmonic11V.toFixed(2),thd.harmonic13V.toFixed(2));

        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.lineChartData = this.functionsBar.series;
    });
  }
  getLoadTime(loadId,time) {
    this.barChartData = null;
    this.loadBar.series[0].data = [];
    this.loadBar.series[1].data = [];
    this.pieCurrent.series = [];
    this.pieVoltage.series = [];
    this.service.getTHDLoad(loadId,time).subscribe((res) => {
      const thd = JSON.parse(JSON.stringify(res));

        this.avgTHDi1=thd.avgTHDi1;
        this.avgTHDv1=thd.avgTHDv1;
        this.maxTHDv1=thd.maxTHDv1;
        this.minTHDv1=thd.minTHDv1;
        this.maxTHDi1=thd.maxTHDi1;
        this.minTHDi1=thd.minTHDi1;

        this.avgTHDi2=thd.avgTHDi2;
        this.avgTHDv2=thd.avgTHDv2;
        this.maxTHDv2=thd.maxTHDv2;
        this.minTHDv2=thd.minTHDv2;
        this.maxTHDi2=thd.maxTHDi2;
        this.minTHDi2=thd.minTHDi2;

        this.avgTHDi3=thd.avgTHDi3;
        this.avgTHDv3=thd.avgTHDv3;
        this.maxTHDv3=thd.maxTHDv3;
        this.minTHDv3=thd.minTHDv3;
        this.maxTHDi3=thd.maxTHDi3;
        this.minTHDi3=thd.minTHDi3;

        this.loadBar.series[0].data.push(thd.harmonic3I1.toFixed(2),thd.harmonic3I2.toFixed(2),thd.harmonic3I3.toFixed(2),thd.harmonic5I1.toFixed(2),thd.harmonic5I2.toFixed(2),thd.harmonic5I3.toFixed(2),thd.harmonic7I1.toFixed(2),thd.harmonic7I2.toFixed(2),thd.harmonic7I3.toFixed(2),thd.harmonic9I1.toFixed(2),thd.harmonic9I2.toFixed(2),thd.harmonic9I3.toFixed(2),thd.harmonic11I1.toFixed(2),thd.harmonic11I2.toFixed(2),thd.harmonic11I3.toFixed(2),thd.harmonic13I1.toFixed(2),thd.harmonic13I2.toFixed(2),thd.harmonic13I3.toFixed(2));
        this.loadBar.series[1].data.push(thd.harmonic3V1.toFixed(2),thd.harmonic3V2.toFixed(2),thd.harmonic3V3.toFixed(2),thd.harmonic5V1.toFixed(2),thd.harmonic5V2.toFixed(2),thd.harmonic5V3.toFixed(2),thd.harmonic7V1.toFixed(2),thd.harmonic7V2.toFixed(2),thd.harmonic7V3.toFixed(2),thd.harmonic9V1.toFixed(2),thd.harmonic9V2.toFixed(2),thd.harmonic9V3.toFixed(2),thd.harmonic11V1.toFixed(2),thd.harmonic11V2.toFixed(2),thd.harmonic11V3.toFixed(2),thd.harmonic13V1.toFixed(2),thd.harmonic13V2.toFixed(2),thd.harmonic13V3.toFixed(2));
        console.log(this.loadBar);
        this.pieCurrent.series.push(thd.harmonic3I,thd.harmonic5I,thd.harmonic7I,thd.harmonic9I,thd.harmonic11I,thd.harmonic13I);
        this.pieVoltage.series.push(thd.harmonic3V,thd.harmonic5V,thd.harmonic7V,thd.harmonic9V,thd.harmonic11V,thd.harmonic13V);
        this.barChartData = this.loadBar.series;
    });
  }


}
