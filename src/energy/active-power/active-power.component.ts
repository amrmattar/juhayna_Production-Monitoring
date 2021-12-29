import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
import { ActivepowerService } from 'src/services/activepower.service';
import { FormControl } from '@angular/forms';

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


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

@Component({
  selector: 'app-active-power',
  templateUrl: './active-power.component.html',
  styleUrls: ['./active-power.component.css'],
})
export class ActivePowerComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  public active: Partial<ChartOptions>;
  public reactive: Partial<ChartOptions>;
  public apparent: Partial<ChartOptions>;
  public chartOptions8: Partial<ChartOptions>;
  public allFunctionsChart: Partial<ChartOptions>;
  public functionChart: Partial<ChartOptions>;
  public allFunctionsBar: Partial<ChartOptions>;
  public allLoadsBar: Partial<ChartOptions>;
  public loadLine: Partial<ChartOptions>;
  public loadLinePhases: Partial<ChartOptions>;
  public pieLoads: Partial<ChartOptions>;
  public pieFunctions: Partial<ChartOptions>;
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
  phaseValues=[{name:'Phase 1',value:1},{name:'Phase 2',value:2},{name:'Phase 3',value:3}];
  phaseValue = 1;

  dateControl = new FormControl('');
  dateControl2 = new FormControl('');
  From:any;
  To:any;

  maxPf = 0;
  minPf = 0;
  avgPf = 0;

  maxFPf = 0;
  minFPf = 0;
  avgFPf = 0;
  avgFAp = 0;
  loads = [];
  menuFunctions = [];
  maxPfFunctionName = '';
  minPfFunctionName = '';
  maxPfLoadName = '';
  minPfLoadName = '';
  tableData = [];
  tableFData = [{ name: '', time: [], data: [] }];
  functionsTime = [];
  functionsFTime = [];
  funcId = 0;
  tableLoadsData = [];
  specificLoadConsumption = 0;
  maxLoadConsumption = 0;

  maxLoadConsumption1 = 0;
  maxLoadConsumption2 = 0;
  maxLoadConsumption3 = 0;

  minLoadConsumption1 = 0;
  minLoadConsumption2 = 0;
  minLoadConsumption3 = 0;

  minLoadConsumption = 0;
  avgLoadConsumption = 0;
  maxLoadsConsumption = 0;
  minLoadsConsumption = 0;
  avgLoadsConsumption = 0;
  avgAPLoadConsumption = 0;

  avgLoadConsumption1 = 0;
  avgLoadConsumption2 = 0;
  avgLoadConsumption3 = 0;
  avgAPLoadConsumption1 =0;
  avgAPLoadConsumption2 =0;
  avgAPLoadConsumption3 =0;

  avgPactLoadConsumption1 =0;
  avgPactLoadConsumption2 =0;
  avgPactLoadConsumption3 =0;

  loadData = [{ name: '', time: [], data: [] }];
  loadCode = 'M1-Q02';
  LoadsTime = [];
  tabIndex = 0;
  pfLinePhase=null;

  maxPact =0;
  minPact = 0;
  maxPapp =0;
  minPapp = 0;
  maxPreact =0;
  minPreact = 0;

  avgPact =0;
  avgPapp =0;
  avgPreact =0;

  maxPactName=null;
  minPactName=null;

  loadName = null;
  functionName = null;
  anotherName = null;
  anotherMax = null;
  areas:any;
  areaName=null;
  areaRender = false;
  oneAreaRender = false;
  onTabClick(index) {
    this.tabIndex = index;
  }
  tabIndex2 = 0;
  onTabClick2(index) {
    this.tabIndex2 = index;
  }
  constructor(private service: ActivepowerService, private http: HttpClient) {

    this.chartOptions3 = {
      series: [
        {
          name:'Active Power (KW)',
          data:[]
        },
        {
          name:'Reactive Power (KVAR)',
          data:[]
        },
        {
          name:'Apparent Power (KVA)',
          data:[]
        },
      ],
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
          format: 'dd/MM/yy HH:mm::ss',
        },
      },
    };

    this.chartOptions = {
      series: [],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
      },
      legend: {
        position: 'right',
        offsetY: 0,
      },
      fill: {
        opacity: 1,
      },
    };

    this.chartOptions2 = {
      series: [],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.chartOptions8 = {
      series: [
        {
          name: "THDi",
          data: []
        },
        {
          name: "THDv",
          data: []
        },

      ],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
        }
      },
      xaxis: {
        type: "category",
        categories: [
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
    this.active= {
      series: [],
      chart: {
        width: 480,
        type: "pie"
      },
      labels: [],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.reactive= {
      series: [],
      chart: {
        width: 480,
        type: "pie"
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.apparent= {
      series: [],
      chart: {
        width: 480,
        type: "pie"
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit(): void {
    // console.log(this.date);
    this.getAllLoads();
    this.getAllAreasLoads();
    this.getAllFunctions();
    this.getAllFunctionsDefault();
  }
  getAllLoads() {
    this.http.get(`${environment.servicesUrl}/Loads`).subscribe((Response) => {
      this.loads = JSON.parse(JSON.stringify(Response));
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
  getAllFunctions() {
    this.http
      .get(`${environment.servicesUrl}/Functions`)
      .subscribe((Response) => {
        this.menuFunctions = JSON.parse(JSON.stringify(Response));
        // this.routeSummary = data.routeSummary;
        //this.processesSummaryList = data.processesSummaryList;
      });
  }

  getAllFunctionsDefault() {
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.active.series = [];
    this.reactive.series = [];
    this.apparent.series = [];
    this.active.labels = [];
    this.reactive.labels = [];
    this.apparent.labels = [];
    this.service.getEnergyByFunctions(1).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions8.series[0].data.push(element.avgTHDi.toFixed(2));
        this.chartOptions8.series[1].data.push(element.avgTHDv.toFixed(2));

        this.active.series.push(element.avgPact);
        this.active.labels.push(element.name);

        this.reactive.series.push(element.avgPreact);
        this.reactive.labels.push(element.name);

        this.apparent.series.push(element.avgPapp);
        this.apparent.labels.push(element.name);
        this.chartOptions8.xaxis.categories.push(element.name);
      });
      this.barData = this.chartOptions8.series[0].data;
    });
  }
  getAllFunctionsTime(time) {
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.active.series = [];
    this.reactive.series = [];
    this.apparent.series = [];
    this.active.labels = [];
    this.reactive.labels = [];
    this.apparent.labels = [];
    this.service.getEnergyByFunctions(time).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions8.series[0].data.push(element.avgTHDi.toFixed(2));
        this.chartOptions8.series[1].data.push(element.avgTHDv.toFixed(2));

        this.active.series.push(element.avgPact);
        this.active.labels.push(element.name);

        this.reactive.series.push(element.avgPreact);
        this.reactive.labels.push(element.name);

        this.apparent.series.push(element.avgPapp);
        this.apparent.labels.push(element.name);
        this.chartOptions8.xaxis.categories.push(element.name);
      });
      this.barData = this.chartOptions8.series[0].data;
    });
  }
  getAllFunctionDefault(funcId) {
    this.lineChartData = null;
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.service.getEnergyByFunction(funcId,1).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions3.series[0].data.push(element.avgPact.toFixed(2));
        this.chartOptions3.series[1].data.push(element.avgPreact.toFixed(2));
        this.chartOptions3.series[2].data.push(element.avgPapp.toFixed(2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 ));
      });
      this.lineChartData = this.chartOptions3.series[0].data;
    });
  }
  getAllFunctionTime(funcId,time) {
    this.lineChartData = null;
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.service.getEnergyByFunction(funcId,time).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions3.series[0].data.push(element.avgPact.toFixed(2));
        this.chartOptions3.series[1].data.push(element.avgPreact.toFixed(2));
        this.chartOptions3.series[2].data.push(element.avgPapp.toFixed(2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 ));
      });
      this.lineChartData = this.chartOptions3.series[0].data;
    });
  }

  getAllAreasDefault() {
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.active.series = [];
    this.reactive.series = [];
    this.apparent.series = [];
    this.active.labels = [];
    this.reactive.labels = [];
    this.apparent.labels = [];
    this.service.getEnergyByAreas(1).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions8.series[0].data.push(element.avgTHDi.toFixed(2));
        this.chartOptions8.series[1].data.push(element.avgTHDv.toFixed(2));

        this.active.series.push(element.avgPact);
        this.active.labels.push(element.name);

        this.reactive.series.push(element.avgPreact);
        this.reactive.labels.push(element.name);

        this.apparent.series.push(element.avgPapp);
        this.apparent.labels.push(element.name);
        this.chartOptions8.xaxis.categories.push(element.name);
      });
      this.barData = this.chartOptions8.series[0].data;
    });
  }
  getAllAreasTime(time) {
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.active.series = [];
    this.reactive.series = [];
    this.apparent.series = [];
    this.active.labels = [];
    this.reactive.labels = [];
    this.apparent.labels = [];
    this.service.getEnergyByAreas(time).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions8.series[0].data.push(element.avgTHDi.toFixed(2));
        this.chartOptions8.series[1].data.push(element.avgTHDv.toFixed(2));

        this.active.series.push(element.avgPact);
        this.active.labels.push(element.name);

        this.reactive.series.push(element.avgPreact);
        this.reactive.labels.push(element.name);

        this.apparent.series.push(element.avgPapp);
        this.apparent.labels.push(element.name);
        this.chartOptions8.xaxis.categories.push(element.name);
      });
      this.barData = this.chartOptions8.series[0].data;
    });
  }
  getAllAreaDefault(funcId) {
    this.lineChartData = null;
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.service.getEnergyByArea(funcId,1).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions3.series[0].data.push(element.avgPact.toFixed(2));
        this.chartOptions3.series[1].data.push(element.avgPreact.toFixed(2));
        this.chartOptions3.series[2].data.push(element.avgPapp.toFixed(2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 ));
      });
      this.lineChartData = this.chartOptions3.series[0].data;
    });
  }
  getAllAreaTime(funcId,time) {
    this.lineChartData = null;
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.service.getEnergyByArea(funcId,time).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions3.series[0].data.push(element.avgPact.toFixed(2));
        this.chartOptions3.series[1].data.push(element.avgPreact.toFixed(2));
        this.chartOptions3.series[2].data.push(element.avgPapp.toFixed(2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 ));
      });
      this.lineChartData = this.chartOptions3.series[0].data;
    });
  }

  getAllLoadsDefault() {
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.active.series = [];
    this.reactive.series = [];
    this.apparent.series = [];
    this.active.labels = [];
    this.reactive.labels = [];
    this.apparent.labels = [];
    this.service.getEnergyByLoads(1).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions8.series[0].data.push(element.avgTHDi.toFixed(2));
        this.chartOptions8.series[1].data.push(element.avgTHDv.toFixed(2));

        this.active.series.push(element.avgPact);
        this.active.labels.push(element.name);

        this.reactive.series.push(element.avgPreact);
        this.reactive.labels.push(element.name);

        this.apparent.series.push(element.avgPapp);
        this.apparent.labels.push(element.name);
        this.chartOptions8.xaxis.categories.push(element.name);
      });
      this.barData = this.chartOptions8.series[0].data;
    });
  }
  getAllLoadsTime(time) {
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.active.series = [];
    this.reactive.series = [];
    this.apparent.series = [];
    this.active.labels = [];
    this.reactive.labels = [];
    this.apparent.labels = [];
    this.service.getEnergyByLoads(time).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions8.series[0].data.push(element.avgTHDi.toFixed(2));
        this.chartOptions8.series[1].data.push(element.avgTHDv.toFixed(2));

        this.active.series.push(element.avgPact);
        this.active.labels.push(element.name);

        this.reactive.series.push(element.avgPreact);
        this.reactive.labels.push(element.name);

        this.apparent.series.push(element.avgPapp);
        this.apparent.labels.push(element.name);
        this.chartOptions8.xaxis.categories.push(element.name);
      });
      this.barData = this.chartOptions8.series[0].data;
    });
  }
  getAllLoadDefault(funcId) {
    this.lineChartData = null;
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.service.getEnergyByLoad(funcId,1).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions3.series[0].data.push(element.avgPact.toFixed(2));
        this.chartOptions3.series[1].data.push(element.avgPreact.toFixed(2));
        this.chartOptions3.series[2].data.push(element.avgPapp.toFixed(2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 ));
      });
      this.lineChartData = this.chartOptions3.series[0].data;
    });
  }
  getAllLoadTime(funcId,time) {
    this.lineChartData = null;
    this.maxPact =0;
    this.minPact = 0;
    this.maxPapp =0;
    this.minPapp = 0;
    this.maxPreact =0;
    this.minPreact = 0;
    this.avgPact =0;
    this.avgPapp =0;
    this.avgPreact =0;
    this.barData = null;
    this.chartOptions8.series[0].data = [];
    this.chartOptions8.series[1].data = [];
    this.chartOptions8.xaxis.categories = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.service.getEnergyByLoad(funcId,time).subscribe((res) => {
      const pData = JSON.parse(JSON.stringify(res));
      console.log(pData);
      this.maxPact = pData.maxPact.toFixed(2);
      this.minPact = pData.minPact.toFixed(3);
      this.maxPapp = pData.maxApp.toFixed(2);
      this.minPapp = pData.minApp.toFixed(3);
      this.maxPreact=pData.maxPreact.toFixed(2);
      this.minPreact=pData.minPreact.toFixed(3);
      this.avgPact = pData.avgPact.toFixed(2);
      this.avgPapp = pData.avgApp.toFixed(2);
      this.avgPreact=pData.avgPreact.toFixed(2);
      pData.actives.forEach(element => {
        this.chartOptions3.series[0].data.push(element.avgPact.toFixed(2));
        this.chartOptions3.series[1].data.push(element.avgPreact.toFixed(2));
        this.chartOptions3.series[2].data.push(element.avgPapp.toFixed(2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 ));
      });
      this.lineChartData = this.chartOptions3.series[0].data;
    });
  }
}
