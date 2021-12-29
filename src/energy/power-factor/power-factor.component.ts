import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
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
import { HttpClient } from '@angular/common/http';
import { PFService } from '../services/power-factor/power-factor.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';

export type ChartOptions = {
  chart: ApexChart;
  annotations: ApexAnnotations;
  colors: string[];
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries;
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
  selector: 'app-power-factor',
  templateUrl: './power-factor.component.html',
  styleUrls: ['./power-factor.component.css'],
})
export class PowerFactorComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
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
  sources=null;
  sourceName = null;
  onTabClick(index) {
    this.tabIndex = index;
  }
  tabIndex2 = 0;
  onTabClick2(index) {
    this.tabIndex2 = index;
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private pfService: PFService, private http: HttpClient) {
    this.pieFunctions = {
      series: [],
      chart: {
        width: 450,
        type: 'pie',
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      labels: [],
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
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
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

    this.chartOptions = {
      series: [
        {
          name: 'north',
          data: [
            {
              x: 1996,
              y: 322,
            },
            {
              x: 1997,
              y: 324,
            },
            {
              x: 1998,
              y: 329,
            },
            {
              x: 1999,
              y: 342,
            },
            {
              x: 2000,
              y: 348,
            },
            {
              x: 2001,
              y: 334,
            },
            {
              x: 2002,
              y: 325,
            },
            {
              x: 2003,
              y: 316,
            },
            {
              x: 2004,
              y: 318,
            },
            {
              x: 2005,
              y: 330,
            },
            {
              x: 2006,
              y: 355,
            },
            {
              x: 2007,
              y: 366,
            },
            {
              x: 2008,
              y: 337,
            },
            {
              x: 2009,
              y: 352,
            },
            {
              x: 2010,
              y: 377,
            },
            {
              x: 2011,
              y: 383,
            },
            {
              x: 2012,
              y: 344,
            },
            {
              x: 2013,
              y: 366,
            },
            {
              x: 2014,
              y: 389,
            },
            {
              x: 2015,
              y: 334,
            },
          ],
        },
      ],
      chart: {
        type: 'area',
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
            customIcons: [],
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            },
          },
          autoSelected: 'zoom',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },

      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          style: {},
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      fill: {
        opacity: 0.5,
      },
      tooltip: {
        x: {
          format: 'yyyy',
        },
        fixed: {
          enabled: false,
          position: 'topRight',
        },
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30,
          },
        },
        padding: {
          left: 20,
        },
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
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
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
    this.chartOptions3 = {
      series: [
        {
          name: 'factory1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'factory2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
        {
          name: 'factory3',
          data: [10, 41, 35, 51, 49, 62, 69],
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
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
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
      series: [
        {
          name:'Power Facrtor',
          data:[]
        }
      ],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
      },
      xaxis: {
        categories: [],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {

      },
    };
    this.allLoadsBar = {
      series: [
        {
          name:'Power Facrtor',
          data:[]
        }
      ],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
      },
      xaxis: {
        categories: [],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {

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

  ngOnInit(): void {
    this.getAllFunctionsDefault();
    this.getAllFunctions();
    this.getAllLoads();
    this.getAllAreasLoads();
    this.getEnergyAllLoadsDefault();
    this.getAllSources();

  }
  changeTab(tab) {
    if (tab.index == 0) {
      this.lineChartVisiable = true;
      this.tableVisisable = false;
      this.BarVisisable = false;
    } else if (tab.index == 2) {
      this.lineChartVisiable = false;
      this.tableVisisable = true;
      this.BarVisisable = false;
    } else if (tab.index == 1) {
      this.lineChartVisiable = false;
      this.tableVisisable = false;
      this.BarVisisable = true;
    }
  }
  changeOneFunctionTab(tab) {
    if (tab.index == 0) {
      this.lineChartVisiable = true;
      this.tableVisisable = false;
    } else if (tab.index == 1) {
      this.lineChartVisiable = false;
      this.tableVisisable = true;
    }
  }

  changeLoadsTab(tab) {
    if (tab.index == 0) {
      this.BarVisisable = true;
      this.tableVisisable = false;
    } else if (tab.index == 1) {
      this.BarVisisable = false;
      this.tableVisisable = true;
    }
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
  getAllSources() {
    this.http.get(`${environment.servicesUrl}/Loads/Sources`).subscribe((Response) => {
      this.sources = JSON.parse(JSON.stringify(Response));
      // this.routeSummary = data.routeSummary;
      //this.processesSummaryList = data.processesSummaryList;
    });
  }

  getAllFunctionsDefault() {
    this.tabIndex = 0;
    this.lineChartData = null;
    this.tableData = [];
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Power Facrtor',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.pieFunctions.series = [];
    this.pieFunctions.labels = [];
    this.pfService.getEnergyByFunctions(1).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgPf = pfData.data.avgPf;
      this.maxPf = pfData.data.maxPf;
      this.minPf = pfData.data.minPf;

      this.maxPfFunctionName = pfData.data.maxPfFunctionName;
      this.minPfFunctionName = pfData.data.minPfFunctionName;

      this.maxPact = pfData.data.maxPact.toFixed(2);
      this.minPact = pfData.data.minPact.toFixed(2);
      this.maxPactName = pfData.data.maxPactName;
      this.minPactName = pfData.data.minPactName;

      pfData.data.tableData.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.avgPf.toFixed(2));


        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });
        //el.avgPact = el.avgPact.toFixed(2);
        this.pieFunctions.series.push(el.avgPact);
        this.pieFunctions.labels.push(el.name +" KW");
      });
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < pfData.data.tableData.data.length; i++) {
        this.tableData[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf);

        this.allFunctionsChart.series[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf.toFixed(2));
      }
      this.allFunctionsChart.xaxis.categories =
        pfData.data.tableData.data[0].loadDailyCharts.map((el) =>
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );

      this.functionsTime = pfData.data.tableData.data[0].loadDailyCharts.map(
        (el) => new Date(el.timeStamp).toLocaleString()
      );

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
      this.lineChartData = this.allFunctionsChart.series;
    });
  }
  log(){
    console.log(this.phaseValues);
  }
  getAllFunctionsTime(time) {
    this.lineChartVisiable = true;
      this.tableVisisable = false;
      this.BarVisisable = false;
    this.pieFunctions.series = [];
    this.pieFunctions.labels = [];
    this.lineChartData = null;
    this.tableData = [];
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Power Factor',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.lineChartData = null;
    this.tableData = [];
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.pfService.getEnergyByFunctions(time).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgPf = pfData.data.avgPf;
      this.maxPf = pfData.data.maxPf;
      this.minPf = pfData.data.minPf;

      this.maxPfFunctionName = pfData.data.maxPfFunctionName;
      this.minPfFunctionName = pfData.data.minPfFunctionName;

      this.maxPact = pfData.data.maxPact.toFixed(2);
      this.minPact = pfData.data.minPact.toFixed(2);
      this.maxPactName = pfData.data.maxPactName;
      this.minPactName = pfData.data.minPactName;

      pfData.data.tableData.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.avgPf.toFixed(2));

        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });
        //el.avgPact = el.avgPact.toFixed(2);
        this.pieFunctions.series.push(el.avgPact);
        this.pieFunctions.labels.push(el.name +" KW");
      });
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < pfData.data.tableData.data.length; i++) {
        this.tableData[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf);

        this.allFunctionsChart.series[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf.toFixed(2));
      }
      this.allFunctionsChart.xaxis.categories =
        pfData.data.tableData.data[0].loadDailyCharts.map((el) =>
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );

      this.functionsTime = pfData.data.tableData.data[0].loadDailyCharts.map(
        (el) => new Date(el.timeStamp).toLocaleString()
      );

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
      this.lineChartData = this.allFunctionsChart.series;
    });
  }
  getAllFunctionsDate(from,to) {
    this.pieFunctions.series = [];
    this.pieFunctions.labels = [];
    this.lineChartData = null;
    this.tableData = [];
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series = [];
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.pfService
      .getEnergyByFunctionsDate(
        from,
        to
      )
      .subscribe((res) => {
        const pfData = JSON.parse(JSON.stringify(res));
        this.avgPf = pfData.data.avgPf;
        this.maxPf = pfData.data.maxPf;
        this.minPf = pfData.data.minPf;

        this.maxPfFunctionName = pfData.data.maxPfFunctionName;
        this.minPfFunctionName = pfData.data.minPfFunctionName;

        pfData.data.tableData.data.forEach((el) => {
          this.allFunctionsChart.series.push({
            name: el.name,
            data: [],
          });
          this.allFunctionsBar.series.push({
            name: el.name,
            data: [el.avgPf],
          });

          this.allFunctionsBar.xaxis.categories.push(el.name);
          this.tableData.push({
            name: el.name,
            data: [],
          });
          this.pieFunctions.series.push(el.avgPf);
          this.pieFunctions.labels.push(el.name);
        });
        console.log(
          this.allFunctionsBar.series,
          this.allFunctionsBar.xaxis.categories
        );
        for (let i = 0; i < pfData.data.tableData.data.length; i++) {
          this.tableData[i].data = pfData.data.tableData.data[
            i
          ].loadDailyCharts.map((el) => el.avgPf);

          this.allFunctionsChart.series[i].data = pfData.data.tableData.data[
            i
          ].loadDailyCharts.map((el) => el.avgPf);
        }
        this.allFunctionsChart.xaxis.categories =
          pfData.data.tableData.data[0].loadDailyCharts.map((el) =>
            new Date(el.timeStamp).setDate( new Date(el.timeStamp).getDate() + 1 )
          );

        this.functionsTime = pfData.data.tableData.data[0].loadDailyCharts.map(
          (el) => new Date(el.timeStamp).toLocaleString()
        );

        console.log(this.allFunctionsChart.series);
        console.log(this.tableData);
        this.lineChartData = this.allFunctionsChart.series;
      });
  }

  getAllAreasDefault() {
    this.tabIndex = 0;
    this.lineChartData = null;
    this.tableData = [];
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Power Factor',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.pieFunctions.series = [];
    this.pieFunctions.labels = [];
    this.pfService.getEnergyByAreas(1).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgPf = pfData.data.avgPf;
      this.maxPf = pfData.data.maxPf;
      this.minPf = pfData.data.minPf;

      this.maxPfFunctionName = pfData.data.maxPfFunctionName;
      this.minPfFunctionName = pfData.data.minPfFunctionName;

      this.maxPact = pfData.data.maxPact.toFixed(2);
      this.minPact = pfData.data.minPact.toFixed(2);
      this.maxPactName = pfData.data.maxPactName;
      this.minPactName = pfData.data.minPactName;

      pfData.data.tableData.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.avgPf.toFixed(2));

        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });
        //el.avgPact = el.avgPact.toFixed(2);
        this.pieFunctions.series.push(el.avgPact);
        this.pieFunctions.labels.push(el.name +" KW");
      });
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < pfData.data.tableData.data.length; i++) {
        this.tableData[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf);

        this.allFunctionsChart.series[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf.toFixed(2));
      }
      this.allFunctionsChart.xaxis.categories =
        pfData.data.tableData.data[0].loadDailyCharts.map((el) =>
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );

      this.functionsTime = pfData.data.tableData.data[0].loadDailyCharts.map(
        (el) => new Date(el.timeStamp).toLocaleString()
      );

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
      this.lineChartData = this.allFunctionsChart.series;
    });
  }
  getAllAreasTime(time) {
    this.lineChartVisiable = true;
      this.tableVisisable = false;
      this.BarVisisable = false;
    this.pieFunctions.series = [];
    this.pieFunctions.labels = [];
    this.lineChartData = null;
    this.tableData = [];
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Power Factor',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.lineChartData = null;
    this.tableData = [];
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.pfService.getEnergyByAreas(time).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgPf = pfData.data.avgPf;
      this.maxPf = pfData.data.maxPf;
      this.minPf = pfData.data.minPf;

      this.maxPfFunctionName = pfData.data.maxPfFunctionName;
      this.minPfFunctionName = pfData.data.minPfFunctionName;

      this.maxPact = pfData.data.maxPact.toFixed(2);
      this.minPact = pfData.data.minPact.toFixed(2);
      this.maxPactName = pfData.data.maxPactName;
      this.minPactName = pfData.data.minPactName;

      pfData.data.tableData.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.avgPf.toFixed(2));

        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });
        //el.avgPact = el.avgPact.toFixed(2);
        this.pieFunctions.series.push(el.avgPact);
        this.pieFunctions.labels.push(el.name +" KW");
      });
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < pfData.data.tableData.data.length; i++) {
        this.tableData[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf);

        this.allFunctionsChart.series[i].data = pfData.data.tableData.data[
          i
        ].loadDailyCharts.map((el) => el.avgPf.toFixed(2));
      }
      this.allFunctionsChart.xaxis.categories =
        pfData.data.tableData.data[0].loadDailyCharts.map((el) =>
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );

      this.functionsTime = pfData.data.tableData.data[0].loadDailyCharts.map(
        (el) => new Date(el.timeStamp).toLocaleString()
      );

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
      this.lineChartData = this.allFunctionsChart.series;
    });
  }

  getEnergyFunctionDefault(funcId) {
    this.functionChartData = null;
    this.anotherMax = null;
    this.anotherName = null;
    this.tableFData = [{ name: '', time: [], data: [] }];
    this.functionChart.series[0].data = [];
    this.functionChart.xaxis.categories = [];
    this.pfService.getEnergyByFunction(funcId, 1).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgFPf = pfData.data.avgPf;
      this.maxFPf = pfData.data.maxPf;
      this.minFPf = pfData.data.minPf;
      this.avgFAp = pfData.data.avgAp;
      this.anotherMax = pfData.data.maxPf2;
      this.anotherName = pfData.data.maxPfFunctionName2;
      this.tableFData[0].name = pfData.data.maxPfFunctionName;
      console.log(
        JSON.parse(JSON.stringify(res)).data.tableData.data[0].loadDailyCharts
      );

      JSON.parse(
        JSON.stringify(res)
      ).data.tableData.data[0].loadDailyCharts.forEach((el, i) => {
        this.tableFData[0].data.push(el.avgPf);
        this.tableFData[0].time.push(new Date(el.timeStamp).toLocaleString());
        this.functionChart.series[0].data.push(el.avgPf);
        this.functionChart.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );
      });
      this.functionChartData = this.functionChart.series[0].data;
    });
  }

  getEnergyFunctionTime(funId, time) {
    this.functionChartData = null;
    this.anotherMax = null;
    this.anotherName = null;
    this.tableFData = [{ name: '', time: [], data: [] }];
    this.functionChart.series[0].data = [];
    this.functionChart.xaxis.categories = [];
    this.pfService.getEnergyByFunction(funId, time).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgFPf = pfData.data.avgPf;
      this.maxFPf = pfData.data.maxPf;
      this.minFPf = pfData.data.minPf;
      this.avgFAp = pfData.data.avgAp;
      this.anotherMax = pfData.data.maxPf2.toFixed(2);
      this.anotherName = pfData.data.maxPfFunctionName2;
      this.tableFData[0].name = pfData.data.maxPfFunctionName;

      pfData.data.tableData.data[0].loadDailyCharts.forEach((el, i) => {
        console.log(el.avgPf);
        this.tableFData[0].data.push(el.avgPf);
        this.tableFData[0].time.push(new Date(el.timeStamp).toLocaleString());
        this.functionChart.series[0].data.push(el.avgPf);
        this.functionChart.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );
      });
      this.functionChartData = this.functionChart.series[0].data;
    });
  }

  getEnergyAreaDefault(funcId) {
    this.tabIndex = 0;
    this.functionChartData = null;
    this.anotherMax = null;
    this.anotherName = null;
    this.tableFData = [{ name: '', time: [], data: [] }];
    this.functionChart.series[0].data = [];
    this.functionChart.xaxis.categories = [];
    this.pfService.getEnergyByArea(funcId, 1).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgFPf = pfData.data.avgPf;
      this.maxFPf = pfData.data.maxPf;
      this.minFPf = pfData.data.minPf;
      this.avgFAp = pfData.data.avgAp;
      this.anotherMax = pfData.data.maxPf2;
      this.anotherName = pfData.data.maxPfFunctionName2;
      this.tableFData[0].name = pfData.data.maxPfFunctionName;
      console.log(
        JSON.parse(JSON.stringify(res)).data.tableData.data[0].loadDailyCharts
      );

      JSON.parse(
        JSON.stringify(res)
      ).data.tableData.data[0].loadDailyCharts.forEach((el, i) => {
        this.tableFData[0].data.push(el.avgPf);
        this.tableFData[0].time.push(new Date(el.timeStamp).toLocaleString());
        this.functionChart.series[0].data.push(el.avgPf);
        this.functionChart.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );
      });
      this.functionChartData = this.functionChart.series[0].data;
    });
  }

  getEnergyAreaTime(funId, time) {
    this.functionChartData = null;
    this.anotherMax = null;
    this.anotherName = null;
    this.tableFData = [{ name: '', time: [], data: [] }];
    this.functionChart.series[0].data = [];
    this.functionChart.xaxis.categories = [];
    this.pfService.getEnergyByArea(funId, time).subscribe((res) => {
      const pfData = JSON.parse(JSON.stringify(res));
      this.avgFPf = pfData.data.avgPf;
      this.maxFPf = pfData.data.maxPf;
      this.minFPf = pfData.data.minPf;
      this.avgFAp = pfData.data.avgAp;
      this.anotherMax = pfData.data.maxPf2.toFixed(2);
      this.anotherName = pfData.data.maxPfFunctionName2;
      this.tableFData[0].name = pfData.data.maxPfFunctionName;

      pfData.data.tableData.data[0].loadDailyCharts.forEach((el, i) => {
        console.log(el.avgPf);
        this.tableFData[0].data.push(el.avgPf);
        this.tableFData[0].time.push(new Date(el.timeStamp).toLocaleString());
        this.functionChart.series[0].data.push(el.avgPf);
        this.functionChart.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );
      });
      this.functionChartData = this.functionChart.series[0].data;
    });
  }

  getEnergyFunctionDate(funId,from,to) {
    this.functionChartData = null;
    this.tableFData = [{ name: '', time: [], data: [] }];
    this.functionChart.series[0].data = [];
    this.functionChart.xaxis.categories = [];
    this.pfService
      .getEnergyByFunctionDate(
        funId,from,
        to
      )
      .subscribe((res) => {
        const pfData = JSON.parse(JSON.stringify(res));
        this.avgFPf = pfData.data.avgPf;
        this.maxFPf = pfData.data.maxPf;
        this.minFPf = pfData.data.minPf;
        this.avgFAp = pfData.data.avgAp;
        this.tableFData[0].name = pfData.data.maxPfFunctionName;

        pfData.data.tableData.data[0].loadDailyCharts.forEach((el, i) => {
          console.log(el.avgPf);
          this.tableFData[0].data.push(el.avgPf);
          this.tableFData[0].time.push(new Date(el.timeStamp).toLocaleString());
          this.functionChart.series[0].data.push(el.avgPf);
          this.functionChart.xaxis.categories.push(
            new Date(el.timeStamp).setDate( new Date(el.timeStamp).getDate() + 1 )
          );
        });
        this.functionChartData = this.functionChart.series[0].data;
      });
  }

  getEnergyAllLoadsDefault() {
    this.tabIndex = 0;
    this.pieLoads.series = [];
    this.pieLoads.labels = [];
    this.oneBarChartData = null;
    this.allLoadsBar.xaxis.categories = [];
    this.allLoadsBar.series= [
      {
        name:'Power Factor',
        data:[]
      }
    ],
    this.tableLoadsData = [];
    this.LoadsTime = [];
    this.pieLoadData = null;
    this.pfService.getEnergyByLoads(1).subscribe((res) => {
      var loadStat = JSON.parse(JSON.stringify(res));

      this.maxPfLoadName = loadStat.maxPfName;
      this.minPfLoadName = loadStat.minPfName;

      this.maxLoadsConsumption = loadStat.maxPower;
      this.minLoadsConsumption = loadStat.minPower;
      this.avgLoadsConsumption = loadStat.avgPower;
      loadStat.data.forEach((el) => {
        this.allLoadsBar.series[0].data.push(el.avgPf.toFixed(2));

        this.allLoadsBar.xaxis.categories.push(el.name);
        this.tableLoadsData.push({
          name: el.name,
          data: [],
        });
        this.pieLoads.series.push(el.avgPf);
        this.pieLoads.labels.push(el.name);
      });
      this.pieLoadData = this.pieLoads.series;
      for (let i = 0; i < loadStat.data.length; i++) {
        this.tableLoadsData[i].data = loadStat.data[i].energyDailyCharts.map(
          (el) => el.avgPf
        );
      }

      this.LoadsTime = loadStat.data[0].energyDailyCharts.map((el) =>
        new Date(el.timeStamp).toLocaleString()
      );

      console.log(this.tableLoadsData);
      this.oneBarChartData = this.allLoadsBar.series;
    });
  }

  getEnergyAllLoadsTime(time) {
    this.pieLoads.series = [];
    this.pieLoads.labels = [];
    this.oneBarChartData = null;
    this.allLoadsBar.xaxis.categories = [];
    this.allLoadsBar.series= [
      {
        name:'Power Factor',
        data:[]
      }
    ],
    this.tableLoadsData = [];
    this.LoadsTime = [];
    this.pieLoadData = null;
    this.pfService.getEnergyByLoads(time).subscribe((res) => {
      var loadStat = JSON.parse(JSON.stringify(res));
      loadStat.data.forEach((el) => {
        this.maxPfLoadName = loadStat.maxPfName;
        this.minPfLoadName = loadStat.minPfName;
        this.maxLoadsConsumption = loadStat.maxPower;
        this.minLoadsConsumption = loadStat.minPower;
        this.avgLoadsConsumption = loadStat.avgPower;
        this.allLoadsBar.series[0].data.push(el.avgPf.toFixed(2));
        this.allLoadsBar.xaxis.categories.push('Power Factor Per Load');
        this.tableLoadsData.push({
          name: el.name,
          data: [],
        });
        this.pieLoads.series.push(el.avgPf);
        this.pieLoads.labels.push(el.name);
      });
      for (let i = 0; i < loadStat.data.length; i++) {
        this.tableLoadsData[i].data = loadStat.data[i].energyDailyCharts.map(
          (el) => el.avgPf
        );
      }
      this.LoadsTime = loadStat.data[0].energyDailyCharts.map((el) =>
        new Date(el.timeStamp).toLocaleString()
      );

      console.log(this.tableLoadsData);
      this.oneBarChartData = this.allLoadsBar.series;
    });
  }
  getEnergyAllLoadsDate(from,to) {
    this.pieLoads.series = [];
    this.pieLoads.labels = [];
    this.oneBarChartData = null;
    this.allLoadsBar.xaxis.categories = [];
    this.allLoadsBar.series = [];
    this.tableLoadsData = [];
    this.LoadsTime = [];
    this.pfService
      .getEnergyByLoadsDate(
        from,
        to
      )
      .subscribe((res) => {
        var loadStat = JSON.parse(JSON.stringify(res));
        loadStat.data.forEach((el) => {
          this.maxPfLoadName = loadStat.maxPfName;
          this.minPfLoadName = loadStat.minPfName;
          this.maxLoadsConsumption = loadStat.maxPower;
          this.minLoadsConsumption = loadStat.minPower;
          this.avgLoadsConsumption = loadStat.avgPower;
          this.allLoadsBar.series.push({
            name: el.name,
            data: [el.avgPf],
          });
          this.allLoadsBar.xaxis.categories.push('Power Factor Per Load');
          this.tableLoadsData.push({
            name: el.name,
            data: [],
          });
          this.pieLoads.series.push(el.avgPf);
          this.pieLoads.labels.push(el.name);
        });
        for (let i = 0; i < loadStat.data.length; i++) {
          this.tableLoadsData[i].data = loadStat.data[i].energyDailyCharts.map(
            (el) => el.avgPf
          );
        }
        this.LoadsTime = loadStat.data[0].energyDailyCharts.map((el) =>
          new Date(el.timeStamp).setDate( new Date(el.timeStamp).getDate() + 1 )
        );

        console.log(this.tableLoadsData);
        this.oneBarChartData = this.allLoadsBar.series;
      });
  }

  getEnergyLoadDefault(loadId) {
    this.tabIndex = 0;
    this.loadLinePhases.series[0].data = [];
    this.loadLinePhases.series[1].data = [];
    this.loadLinePhases.series[2].data = [];
    this.loadData[0].data = [];
    this.loadLine.xaxis.categories = [];
    this.loadData[0].time = [];
    this.loadlineData = null;
    this.maxLoadConsumption =0;
    this.maxLoadConsumption1 =0;
    this.maxLoadConsumption2 =0;
    this.maxLoadConsumption3 =0;
    this.minLoadConsumption1 =0;
    this.minLoadConsumption2 =0;
    this.minLoadConsumption3 =0;
      this.minLoadConsumption = 0;
      this.avgLoadConsumption = 0;
      this.avgAPLoadConsumption =0;
      this.avgLoadConsumption1 =0;
      this.avgLoadConsumption2 =0;
      this.avgLoadConsumption3 =0;
      this.avgAPLoadConsumption1 =0;
      this.avgAPLoadConsumption2 =0;
      this.avgAPLoadConsumption3 =0;
      this.avgPactLoadConsumption1 =0;
      this.avgPactLoadConsumption2 =0;
      this.avgPactLoadConsumption3 =0;
      this.loadLine.series[0].name = 'NULL';
    this.pfService.getEnergyByLoad(loadId, 1).subscribe((res) => {
      // console.log(JSON.parse(JSON.stringify(res)));
      // if(JSON.parse(JSON.stringify(res)).error.status == 'error')
      // {
      //   alert("This Machine is Offline!");
      //   console.log(JSON.parse(JSON.stringify(res)).status);
      // }
      var loadStat = JSON.parse(JSON.stringify(res));
      this.maxLoadConsumption = loadStat.data.maxPf;
      this.maxLoadConsumption1 = loadStat.data.maxPf1;
      this.maxLoadConsumption2 = loadStat.data.maxPf2;
      this.maxLoadConsumption3 = loadStat.data.maxPf3;

      this.minLoadConsumption1 = loadStat.data.minPf1;
      this.minLoadConsumption2 = loadStat.data.minPf2;
      this.minLoadConsumption3 = loadStat.data.minPf3;

      this.minLoadConsumption = loadStat.data.minPf;
      this.avgLoadConsumption = loadStat.data.avgPf;
      this.avgLoadConsumption1 = loadStat.data.avgPf1;
      this.avgLoadConsumption2 = loadStat.data.avgPf2;
      this.avgLoadConsumption3 = loadStat.data.avgPf3;
      this.avgAPLoadConsumption = loadStat.data.avgAPP;
      this.avgAPLoadConsumption1 = loadStat.data.avgAP1;
      this.avgAPLoadConsumption2 = loadStat.data.avgAP2;
      this.avgAPLoadConsumption3 = loadStat.data.avgAP3;

      this.avgPactLoadConsumption1 = loadStat.data.avgPact1;
      this.avgPactLoadConsumption2 = loadStat.data.avgPact2;
      this.avgPactLoadConsumption3 = loadStat.data.avgPact3;
      this.loadLine.series[0].name = loadStat.data.load.name;
      loadStat.data.powerFactordata.forEach((element) => {
        this.loadLinePhases.series[0].data.push(element.avgPf1);
        this.loadLinePhases.series[1].data.push(element.avgPf2);
        this.loadLinePhases.series[2].data.push(element.avgPf3);
        this.loadData[0].data.push(element.avgPf);
        this.loadLinePhases.xaxis.categories.push(
          new Date(element.timeStamp).toLocaleString()
        );
        this.loadData[0].time.push(
          new Date(element.timeStamp).toLocaleString()
        );
      });
      this.loadlineData = this.loadLinePhases.series;
      console.log(
        this.loadLine.series,
        this.loadData,
        this.specificLoadConsumption
      );
    });
  }
  getEnergyLoadTime(time) {
    this.loadLinePhases.series[0].data = [];
    this.loadLinePhases.series[1].data = [];
    this.loadLinePhases.series[2].data = [];
    this.loadData[0].data = [];
    this.loadlineData = null;
    this.loadLine.xaxis.categories = [];
    this.loadData[0].time = [];
    this.maxLoadConsumption =0;
    this.maxLoadConsumption1 =0;
    this.maxLoadConsumption2 =0;
    this.maxLoadConsumption3 =0;
    this.minLoadConsumption1 =0;
    this.minLoadConsumption2 =0;
    this.minLoadConsumption3 =0;
      this.minLoadConsumption = 0;
      this.avgLoadConsumption = 0;
      this.avgAPLoadConsumption =0;
      this.avgLoadConsumption1 =0;
      this.avgLoadConsumption2 =0;
      this.avgLoadConsumption3 =0;
      this.avgAPLoadConsumption1 =0;
      this.avgAPLoadConsumption2 =0;
      this.avgAPLoadConsumption3 =0;
      this.avgPactLoadConsumption1 =0;
      this.avgPactLoadConsumption2 =0;
      this.avgPactLoadConsumption3 =0;
    this.pfService.getEnergyByLoad(this.loadCode,time).subscribe((res) => {
      var loadStat = JSON.parse(JSON.stringify(res));
      this.maxLoadConsumption = loadStat.data.maxPf;
      this.maxLoadConsumption1 = loadStat.data.maxPf1;
      this.maxLoadConsumption2 = loadStat.data.maxPf2;
      this.maxLoadConsumption3 = loadStat.data.maxPf3;
      this.minLoadConsumption1 = loadStat.data.minPf1;
      this.minLoadConsumption2 = loadStat.data.minPf2;
      this.minLoadConsumption3 = loadStat.data.minPf3;

      this.minLoadConsumption = loadStat.data.minPf;
      this.avgLoadConsumption = loadStat.data.avgPf;
      this.avgLoadConsumption1 = loadStat.data.avgPf1;
      this.avgLoadConsumption2 = loadStat.data.avgPf2;
      this.avgLoadConsumption3 = loadStat.data.avgPf3;
      this.avgAPLoadConsumption = loadStat.data.avgAPP;
      this.avgAPLoadConsumption1 = loadStat.data.avgAP1;
      this.avgAPLoadConsumption2 = loadStat.data.avgAP2;
      this.avgAPLoadConsumption3 = loadStat.data.avgAP3;

      this.avgPactLoadConsumption1 = loadStat.data.avgPact1;
      this.avgPactLoadConsumption2 = loadStat.data.avgPact2;
      this.avgPactLoadConsumption3 = loadStat.data.avgPact3;
      loadStat.data.powerFactordata.forEach((element) => {
        this.loadLinePhases.series[0].data.push(element.avgPf1);
        this.loadLinePhases.series[1].data.push(element.avgPf2);
        this.loadLinePhases.series[2].data.push(element.avgPf3);
        this.loadData[0].data.push(element.avgPf);
        this.loadLine.xaxis.categories.push(
          new Date(element.timeStamp).toLocaleString()
        );
        this.loadData[0].time.push(
          new Date(element.timeStamp).toLocaleString()
        );
      });
      this.loadlineData = this.loadLinePhases.series;
      console.log(
        this.loadLine.series,
        this.loadData,
        this.specificLoadConsumption
      );
    });
  }
  getEnergyLoadDate(loadId,from,to) {
    this.loadLine.series[0].data = [];
    this.loadData[0].data = [];
    this.loadLine.xaxis.categories = [];
    this.loadData[0].time = [];
    this.pfService
      .getEnergyByLoadDate(
        loadId,
        from,
        to
      )
      .subscribe((res) => {
        var loadStat = JSON.parse(JSON.stringify(res));
        this.maxLoadConsumption = loadStat.data.maxPf;
        this.minLoadConsumption = loadStat.data.minPf;
        this.avgLoadConsumption = loadStat.data.avgPf;
        this.avgAPLoadConsumption = loadStat.data.avgAPP;
        this.loadLine.series[0].name = loadStat.data.load.name;
        loadStat.data.powerFactordata.forEach((element) => {
          this.loadLine.series[0].data.push(element.avgPf);
          this.loadData[0].data.push(element.avgPf);
          this.loadLine.xaxis.categories.push(
            new Date(element.timeStamp).setDate( new Date(element.timeStamp).getDate() + 1 )
          );
          this.loadData[0].time.push(
            new Date(element.timeStamp).toLocaleString()
          );
        });
        console.log(
          this.loadLine.series,
          this.loadData,
          this.specificLoadConsumption
        );
      });
  }
  fromDate(ee)
{

  this.From = new Date(ee.value.setHours( new Date(ee.value).getHours() + 2 )).toISOString();
  console.log(this.From);
}
toDate(ee)
{

  this.To =  new Date(ee.value.setHours( new Date(ee.value).getHours() + 2 )).toISOString();
  console.log(this.From.substring(0,this.From.length-1));
  console.log(this.To.substring(0,this.To.length-1));

  this.getAllFunctionsDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  this.getEnergyAllLoadsDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  this.getEnergyFunctionDate(this.funcId,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  this.getEnergyLoadDate(this.loadCode,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
}

}
