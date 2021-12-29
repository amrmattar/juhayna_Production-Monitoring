import { Component, OnInit, ViewChild, Inject } from '@angular/core';
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
import { EnergyService } from '../services/energy/energy.service';
import { environment } from 'src/environments/environment';
import * as echarts from 'echarts';
import { graphic, EChartsOption } from 'echarts';
import { FormGroup, FormControl } from '@angular/forms';
import * as Handsontable from 'handsontable';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
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
  selector: 'app-energy-consumption',
  templateUrl: './energy-consumption.component.html',
  styleUrls: ['./energy-consumption.component.css'],
})
export class EnergyConsumptionComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  public allFunctionsChart: Partial<ChartOptions>;
  public allFunctionsBar: Partial<ChartOptions>;
  public allLoadsBar: Partial<ChartOptions>;
  public loadLine: Partial<ChartOptions>;
  public loadLiveLine: Partial<ChartOptions>;
  public factoriesFunction: Partial<ChartOptions>;
  public factoriesFunction2: Partial<ChartOptions>;
  public factoriesFunction3: Partial<ChartOptions>;
  public factoriesFunction4: Partial<ChartOptions>;
  public pieFucntions: Partial<ChartOptions>;
  public pieAreaLoads: Partial<ChartOptions>;
  public pieFunctionLoads: Partial<ChartOptions>;
  public pieLoads: Partial<ChartOptions>;
  chartoptions: EChartsOption;
  dateControl = new FormControl('');
  dateControl2 = new FormControl('');
  From:any;
  To:any;
  exportAsConfig2: ExportAsConfig = {
    type: 'csv', // the type you want to download
    elementIdOrContent:'myTableElementId' // the id of html/table element
  }
  data = null;
  loadName = null;
  functionName = null;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    height: 150,
    legend: {
      data: [],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['EGFood'],
    },
    series: [],
  };
  option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    height: 150,
    legend: {
      data: [],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['EGFood'],
    },
    series: [],
  };
  option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    height: 150,
    legend: {
      data: [],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['EGFood'],
    },
    series: [],
  };

  loads = [];
  menuFunctions = [];
  loadDataSpecific=null;

  lineChartVisiable = true;
  tableVisisable = false;
  barVisisable = false;
  lineChartVisiable2 = true;
  tableVisisable2 = false;
  barVisisable2 = false;
  lineChartVisiable3 = true;
  tableVisisable3 = false;
  barVisisable3 = false;
  lineChartVisiable4 = true;
  tableVisisable4 = false;
  barVisisable4 = false;

  functionRender = false;
  factoryRender = false;
  loadRender = false;
  allFunctions = false;
  allLoads = false;
  allAreas = false;
  areaRender = false;
  totalEnergyConsumption = 0;
  functions = [];
  lineData = null;
  totalConsumption = 0;
  avgConsumption = 0;
  totalConsumption1 = 0;
  totalConsumption2 = 0;
  totalConsumption3 = 0;
  maxConsumption = 0;
  minConsumption = 0;
  functionLineDate = null;
  allFunctionConsumptions = 0;
  functionsTime = [];
  LoadsTime = [];
  tableData = [];
  tableLoadsData = [];
  oneLoadRender = false;
  specificLoadConsumption = 0;
  maxLoadConsumption = 0;
  minLoadConsumption = 0;

  maxLoadConsumption1 = 0;
  minLoadConsumption1 = 0;

  maxLoadConsumption2 = 0;
  minLoadConsumption2 = 0;

  maxLoadConsumption3 = 0;
  minLoadConsumption3 = 0;
  loadData = [{ name: '', time: [], data: [] }];
  loadCode = null;
  funcId = 1;
  tabIndex = 0;
  factoriesFunctions = null;
  avgFunctionConsumptio = 0;
  avgLoadConsumptio = 0;
  avgV=0;
  avgC=0;
  maxV=0;
  maxC=0;
  allFunctionChartData:any;
  allLoadsChartData=null;
  allFunctionPieData:any;
  allLoadsPieData=null;
  level=0;
  areas:any;
  areaName=null;
  sources=null;
  sourceName = null;
  yesterdayData:any;
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
  interval:any;
  logDate() {
    console.log(new Date(this.range.value).toJSON());
  }




  constructor(private energyService: EnergyService, private http: HttpClient,private exportAsService: ExportAsService) {
    this.pieFucntions = {
      series: [],
      chart: {
        width: 500,
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
    this.pieAreaLoads = {
      series: [],
      chart: {
        width: 500,
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
    this.pieFunctionLoads = {
      series: [],
      chart: {
        width: 500,
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
        width: 500,
        type: 'pie',
      },
      labels: [],
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
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

    this.factoriesFunction = {
      series: [],
      chart: {
        type: 'bar',
        height: 150,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {},
      xaxis: {
        categories: ['EGFood'],
        labels: {
          formatter: function (val) {
            return val + ' KWH';
          },
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: 'Functions (KWH)',
        },
        labels: {
          show: false,
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
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'KWH';
          },
        },
      },
      fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          shadeIntensity: 0.15,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
    this.factoriesFunction2 = {
      series: [],
      chart: {
        type: 'bar',
        height: 150,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {},
      xaxis: {
        categories: ['Area'],
        labels: {
          formatter: function (val) {
            return val + ' KWH';
          },
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: 'Area (KWH)',
        },
        labels: {
          show: false,
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
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'KWH';
          },
        },
      },
      fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          shadeIntensity: 0.15,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
    this.factoriesFunction3 = {
      series: [],
      chart: {
        type: 'bar',
        height: 150,
        stacked: true,
        stackType: '100%',
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {},
      xaxis: {
        categories: ['Upstream'],
        labels: {
          formatter: function (val) {
            return val + ' KWH';
          },
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: 'Upstream (KWH)',
        },
        labels: {
          show: false,
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
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'KWH';
          },
        },
      },
      fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          shadeIntensity: 0.15,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
    this.factoriesFunction4 = {
      series: [],
      chart: {
        type: 'bar',
        height: 150,
        stacked: true,
        stackType: '100%',
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {},
      xaxis: {
        categories: ['Feeders'],
        labels: {
          formatter: function (val) {
            return val + ' KWH';
          },
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: 'Feeders (KWH)',
        },
        labels: {
          show: false,
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
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'KWH';
          },
        },
      },
      fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
          type: 'horizontal',
          shadeIntensity: 0.15,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
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
      colors: ['#FF9800'],
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
        curve: 'smooth',
      },

      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          show: false,
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
        enabled:false,
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
        type:'datetime',
        categories: [],
        title: {
          text: "Hours"
        }
      },
      yaxis: {
        title: {
          text: "KWH"
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
      },
    };
    this.loadLine = {
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

      chart: {
        height: 350,
        type: "area",
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: "zoom"
        },
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      fill:{
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
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
        type:'datetime',
        categories: [],
        labels: {
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM \'yy',
            day: 'dd MMM',
            hour: 'HH:mm:ss'
          }
        },
        title:{
          text:"Hours"
        }

    },
    yaxis: {
      title: {
        text: "KWH"
      }
    },
      tooltip: {
        enabled: true,
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
        y: {
          formatter: function(val) {
            return  val + " KWH";
          }
        }
      },
    };
    this.loadLiveLine = {
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

      chart: {
        height: 350,
        type: "area",
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: "zoom"
        },
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      fill:{
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
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
        type:'datetime',
        categories: [],
        title: {
          text: "Hours"
        },
        labels: {
          show: true,

          datetimeUTC: true,
          datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'HH:mm:ss',
          },
      },

    },
      tooltip: {
        enabled: true,
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
        y: {
          formatter: function(val) {
            return  val + " KWH";
          }
        }
      },
      yaxis: {
        title: {
          text: "KWH"
        }
      },
    };
    this.chartOptions3 = {
      series: [
        {
          name: 'EGFood',
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
      yaxis:{
        title:{
          text:"kwh"
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
        y: {
          formatter: function(val) {
            return  val + " KWH";
          }
        }
      },
    };
    this.chartOptions4 = {
      series: [
        {
          name: 'Energy Consumption',
          data: [],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded'
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['EGFood'],
      },
      yaxis: {
        title: {
          text: 'KWH',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + ' KWH';
          },
        },
      },
    };
    this.allFunctionsBar = {
      series: [
        {
          name:'Energy',
          data:[]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],

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
      yaxis: {
        title: {
          text: 'KWH',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + ' KWH';
          },
        },
      },
    };
    this.allLoadsBar = {
      series: [
        {
          name:'Energy',
          data:[]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#023e8a','#d62828', '#ffadad', '#6b705c'],

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
      yaxis: {
        title: {
          text: 'KWH',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + ' KWH';
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
        y: {
          formatter: function(val) {
            return  val + " KWH";
          }
        }
      },
    };
  }

  ngOnInit(): void {


    this.getEnergyFactoryDefault();
    this.getAllFunctions();
    this.getAllLoads();
    this.getAllAreasLoads();
    this.getAllSources();



    //this.getEnergyFunctionDefault();
  }
  download2()
{
  const d = new Date();
  d.setDate(d.getDate() - 1);
  this.exportAsService.save(this.exportAsConfig2, `${'All Loads Consumption Yesterday'+' '+d.toDateString()}`);
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig2).subscribe(content => {
      console.log(content);
    });
}
  changeTab(tab) {
    if (tab.index == 0) {
      this.lineChartVisiable = true;
      this.tableVisisable = false;
      this.barVisisable = false;
    } else if (tab.index == 1) {
      this.lineChartVisiable = false;
      this.tableVisisable = false;
      this.barVisisable = true;
    } else if (tab.index == 2) {
      this.lineChartVisiable = false;
      this.tableVisisable = true;
      this.barVisisable = false;
    }
  }

  changeTab2(tab) {
    if (tab.index == 0) {
      this.lineChartVisiable2 = true;
      this.tableVisisable2 = false;
      this.barVisisable2 = false;
    } else if (tab.index == 1) {
      this.lineChartVisiable2 = false;
      this.tableVisisable2 = false;
      this.barVisisable2 = true;
    } else if (tab.index == 2) {
      this.lineChartVisiable2 = false;
      this.tableVisisable2 = true;
      this.barVisisable2 = false;
    }
  }
  changeTab4(tab) {
    if (tab.index == 0) {
      this.lineChartVisiable4 = true;
      this.tableVisisable4 = false;
    } else if (tab.index == 1) {
      this.lineChartVisiable4 = false;
      this.tableVisisable4 = true;
    }
  }

  changefactoryTab(tab) {
    if (tab.index == 0) {
      this.lineChartVisiable = true;
      this.tableVisisable = false;
      this.barVisisable = false;
    } else if (tab.index == 1) {
      this.lineChartVisiable = false;
      this.tableVisisable = true;
      this.barVisisable = false;
    }
  }
  changefactoryTab2(tab) {
    if (tab.index == 0) {
      this.lineChartVisiable3 = true;
      this.tableVisisable3 = false;
      this.barVisisable3 = false;
    } else if (tab.index == 1) {
      this.lineChartVisiable3 = false;
      this.tableVisisable3 = true;
      this.barVisisable3 = false;
    }
  }
  getAllLoads() {
    this.http.get(`${environment.servicesUrl}/Loads`).subscribe((Response) => {
      this.loads = JSON.parse(JSON.stringify(Response));
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

  // GetAllLoadsYesterday(){

  //   this.energyService.GetAllLoadsYesterday().subscribe(
  //     (res) => {
  //       this.yesterdayData = JSON.parse(JSON.stringify(res));
  //     }
  //   );
  // }
  getEnergyFactoryDefault() {
    this.tabIndex2 =0;
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.factoriesFunction.series = [];
    this.factoriesFunction2.series = [];
    this.factoriesFunction3.series = [];
    this.factoriesFunction4.series = [];
    this.factoriesFunctions = null;
    this.lineData = null;
    this.chartOptions4.series[0].data = [];
    this.energyService.getEnergyByFactory(1, 1).subscribe(
      (res) => {
        this.totalEnergyConsumption = JSON.parse(
          JSON.stringify(res)
        ).data.totalEnergyConsume;
        this.maxC = JSON.parse(
          JSON.stringify(res)
        ).maxCurrent.toFixed(2);
        this.maxV = JSON.parse(
          JSON.stringify(res)
        ).maxVoltage.toFixed(2);
        this.avgC = JSON.parse(
          JSON.stringify(res)
        ).avgCurrent.toFixed(2);
        this.avgV = JSON.parse(
          JSON.stringify(res)
        ).avgVoltage.toFixed(2);
        this.functions = JSON.parse(JSON.stringify(res)).functions;
        JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach(
          (el, i) => {
            this.chartOptions3.series[0].data.push(el.totalEnergyConsume);
            this.chartOptions3.xaxis.categories.push(new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 ));
          }
        );

        JSON.parse(JSON.stringify(res)).energyData.forEach((el, i) => {
          this.factoriesFunction.series.push({
            name: el.name,
            data: [el.energy],
          });


        });
        JSON.parse(JSON.stringify(res)).areaData.forEach((el, i) => {
          this.factoriesFunction2.series.push({
            name: el.name,
            data: [el.energy],
          });
        });

        JSON.parse(JSON.stringify(res)).upstreamData.forEach((el, i) => {
          this.factoriesFunction3.series.push({
            name: el.name,
            data: [el.energy],
          });
        });

        JSON.parse(JSON.stringify(res)).feedersData.forEach((el, i) => {
          this.factoriesFunction4.series.push({
            name: el.name,
            data: [el.energy],
          });
        });

        console.log(this.option.series);
        this.data = this.option.series;
        this.factoriesFunctions = this.factoriesFunction.series;
        this.lineData = this.chartOptions3.series[0].data;
        this.chartOptions4.series[0].data.push(
          JSON.parse(JSON.stringify(res)).totalEnergyConsumption
        );
      },
      (err) => {
        console.log('Test: ', err);
      }
    );
  }

  getEnergyFactoryTime(time) {
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.factoriesFunction.series = [];
    this.factoriesFunction2.series = [];
    this.factoriesFunction3.series = [];
    this.factoriesFunction4.series = [];
    this.factoriesFunctions = null;
    this.lineData = null;
    this.chartOptions4.series[0].data = [];
    this.energyService.getEnergyByFactory(1, time).subscribe(
      (res) => {

        this.maxC = JSON.parse(
          JSON.stringify(res)
        ).maxCurrent.toFixed(2);
        this.maxV = JSON.parse(
          JSON.stringify(res)
        ).maxVoltage.toFixed(2);
        this.avgC = JSON.parse(
          JSON.stringify(res)
        ).avgCurrent.toFixed(2);
        this.avgV = JSON.parse(
          JSON.stringify(res)
        ).avgVoltage.toFixed(2);
        this.totalEnergyConsumption = JSON.parse(
          JSON.stringify(res)
        ).totalEnergyConsumption;
        this.functions = JSON.parse(JSON.stringify(res)).functions;
        JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach(
          (el, i) => {
            this.chartOptions3.series[0].data.push(el.totalEnergyConsume);
            this.chartOptions3.xaxis.categories.push(new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 ));
          }
        );
        JSON.parse(JSON.stringify(res)).energyData.forEach((el, i) => {
          this.factoriesFunction.series.push({
            name: el.name,
            data: [el.energy],
          });

          console.log(this.factoriesFunction.series);
        });
        JSON.parse(JSON.stringify(res)).areaData.forEach((el, i) => {
          this.factoriesFunction2.series.push({
            name: el.name,
            data: [el.energy],
          });
        });

        JSON.parse(JSON.stringify(res)).upstreamData.forEach((el, i) => {
          this.factoriesFunction3.series.push({
            name: el.name,
            data: [el.energy],
          });


        });
        JSON.parse(JSON.stringify(res)).feedersData.forEach((el, i) => {
          this.factoriesFunction4.series.push({
            name: el.name,
            data: [el.energy],
          });
        });
        this.data = this.option.series;
        this.lineData = this.factoriesFunction3.series;
        this.chartOptions4.series[0].data.push(
          JSON.parse(JSON.stringify(res)).totalEnergyConsumption
        );
        console.log(this.chartOptions3.series[0].data);
      },
      (err) => {
        console.log('Test: ', err);
      }
    );
  }

  getEnergyFactoryDate(from,to) {
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.xaxis.categories = [];
    this.energyService
      .getEnergyByFactoryDate(
        1,
        from,to
      )
      .subscribe(
        (res) => {
          this.chartOptions3.series[0].data = [];
          this.chartOptions4.series[0].data = [];
          this.factoriesFunction.series = [];
          this.chartOptions3.xaxis.categories = [];
          this.data = null;
          this.lineData = null;
          this.option.series = [];
          this.totalEnergyConsumption = JSON.parse(
            JSON.stringify(res)
          ).totalEnergyConsumption;
          this.functions = JSON.parse(JSON.stringify(res)).functions;
          JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach(
            (el, i) => {
              this.chartOptions3.series[0].data.push(el.totalEnergyConsume);
              this.chartOptions3.xaxis.categories.push(el.timeStamp);
            }
          );
          JSON.parse(JSON.stringify(res)).energyData.forEach((el, i) => {
            this.factoriesFunction.series.push({
              name: el.name,
              data: [el.energy],
            });
            this.option.legend.data.push(el.name);

            this.option.series.push({
              name: el.name,
              type: 'bar',
              stack: 'total',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
              data: [el.energy],
            });
          });
          this.data = this.option.series;
          this.lineData = this.chartOptions3.series[0].data;
          this.chartOptions4.series[0].data.push(
            JSON.parse(JSON.stringify(res)).totalEnergyConsumption
          );
          console.log(this.chartOptions3.series[0].data);
        },
        (err) => {
          console.log('Test: ', err);
        }
      );
  }

  getEnergyFunctionDefault(funcId) {
    this.tabIndex2 =0;
    this.chartOptions2.series[0].data = [];
    this.pieFunctionLoads.series = [];
  this.pieFunctionLoads.labels = [];
    this.maxC =0;
    this.maxV = 0;
    this.avgC = 0;
    this.avgV - 0;
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.functionLineDate = null;
    this.energyService.getEnergyByFunction(funcId, 1).subscribe((res) => {
      this.totalConsumption = JSON.parse(
        JSON.stringify(res)
      ).totalEnergyConsumed;
      this.maxC = JSON.parse(
        JSON.stringify(res)
      ).maxCurrent;
      this.maxV = JSON.parse(
        JSON.stringify(res)
      ).maxVoltage;
      this.avgC = JSON.parse(
        JSON.stringify(res)
      ).avgCurrent;
      this.avgV = JSON.parse(
        JSON.stringify(res)
      ).avgVoltage;
      this.maxConsumption = JSON.parse(JSON.stringify(res)).maxPower;
      this.minConsumption = JSON.parse(JSON.stringify(res)).minPower;
      this.avgConsumption = JSON.parse(JSON.stringify(res)).avgPower;

      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      this.chartOptions2.series[0].name=JSON.parse(JSON.stringify(res)).data.name;
      JSON.parse(JSON.stringify(res)).loadDTOs.forEach(element => {
        this.pieFunctionLoads.series.push(element.energy);
        this.pieFunctionLoads.labels.push(element.name);
      });
      JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach((el, i) => {
        this.chartOptions2.series[0].data.push(el.totalEnergyConsume);

        this.chartOptions2.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );
      });
      this.functionLineDate = this.chartOptions2.series[0].data;
      console.log(this.chartOptions2);
    });
  }

  getEnergyFunctionTime(funcId, time) {
    this.functionsTime = [];
    this.chartOptions2.series[0].data = [];
    this.chartOptions2.xaxis.categories = [];
    this.functionLineDate = null;
    this.pieFunctionLoads.series = [];
  this.pieFunctionLoads.labels = [];
    this.maxC =0;
    this.maxV = 0;
    this.avgC = 0;
    this.avgV - 0;
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService.getEnergyByFunction(funcId, time).subscribe((res) => {
      this.totalConsumption = JSON.parse(
        JSON.stringify(res)
      ).totalEnergyConsumed;
      this.maxConsumption = JSON.parse(JSON.stringify(res)).maxPower;
      this.minConsumption = JSON.parse(JSON.stringify(res)).minPower;
      this.avgConsumption = JSON.parse(JSON.stringify(res)).avgPower;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      this.chartOptions2.series[0].name=JSON.parse(JSON.stringify(res)).data.name;
      JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach((el, i) => {
        this.chartOptions2.series[0].data.push(el.totalEnergyConsume);
        this.chartOptions2.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )        );
      });
      JSON.parse(JSON.stringify(res)).loadDTOs.forEach(element => {
        this.pieFunctionLoads.series.push(element.energy);
        this.pieFunctionLoads.labels.push(element.name);
      });
      this.functionLineDate = this.chartOptions2.series[0].data;
      console.log(this.chartOptions2.series[0].data);
    });
  }
  getEnergyAreaDefault(funcId) {
    this.tabIndex2 =0;
    this.chartOptions2.series[0].data = [];
    this.maxC =0;
    this.maxV = 0;
    this.avgC = 0;
    this.avgV - 0;
    this.functionLineDate = null;
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
  this.pieAreaLoads.series = [];
  this.pieAreaLoads.labels = [];
    this.energyService.getEnergyByArea(funcId, 1).subscribe((res) => {
      this.totalConsumption = JSON.parse(
        JSON.stringify(res)
      ).totalEnergyConsumed;
      this.maxC = JSON.parse(
        JSON.stringify(res)
      ).maxCurrent;
      this.maxV = JSON.parse(
        JSON.stringify(res)
      ).maxVoltage;
      this.avgC = JSON.parse(
        JSON.stringify(res)
      ).avgCurrent;
      this.avgV = JSON.parse(
        JSON.stringify(res)
      ).avgVoltage;
      this.maxConsumption = JSON.parse(JSON.stringify(res)).maxPower;
      this.minConsumption = JSON.parse(JSON.stringify(res)).minPower;
      this.avgConsumption = JSON.parse(JSON.stringify(res)).avgPower;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      this.chartOptions2.series[0].name=JSON.parse(JSON.stringify(res)).data.name;

      JSON.parse(JSON.stringify(res)).loadDTOs.forEach(element => {
        this.pieAreaLoads.series.push(element.energy);
        this.pieAreaLoads.labels.push(element.name);
      });

      JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach((el, i) => {
        this.chartOptions2.series[0].data.push(el.totalEnergyConsume);

        this.chartOptions2.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )
        );
      });
      this.functionLineDate = this.chartOptions2.series[0].data;
      console.log(this.chartOptions2);
    });
  }

  getEnergyAreaTime(funcId, time) {
    this.functionsTime = [];
    this.chartOptions2.series[0].data = [];
    this.chartOptions2.xaxis.categories = [];
    this.pieAreaLoads.series = [];
  this.pieAreaLoads.labels = [];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.functionLineDate = null;
    this.maxC =0;
    this.maxV = 0;
    this.avgC = 0;
    this.avgV - 0;
    this.energyService.getEnergyByArea(funcId, time).subscribe((res) => {
      this.totalConsumption = JSON.parse(
        JSON.stringify(res)
      ).totalEnergyConsumed;
      this.maxConsumption = JSON.parse(JSON.stringify(res)).maxPower;
      this.minConsumption = JSON.parse(JSON.stringify(res)).minPower;
      this.avgConsumption = JSON.parse(JSON.stringify(res)).avgPower;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      this.chartOptions2.series[0].name=JSON.parse(JSON.stringify(res)).data.name;
      JSON.parse(JSON.stringify(res)).loadDTOs.forEach(element => {
        this.pieAreaLoads.series.push(element.energy);
        this.pieAreaLoads.labels.push(element.name);
      });
      JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach((el, i) => {
        this.chartOptions2.series[0].data.push(el.totalEnergyConsume);
        this.chartOptions2.xaxis.categories.push(
          new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )        );
      });
      this.functionLineDate = this.chartOptions2.series[0].data;
      console.log(this.chartOptions2.series[0].data);
    });
  }
  getEnergyFunctionDate(funcId,from,to) {
    this.chartOptions2.series[0].data = [];
    this.chartOptions2.xaxis.categories = [];
    this.functionLineDate = null;
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService
      .getEnergyByFunctionDate(
        funcId,
        from,to
      )
      .subscribe((res) => {
        this.totalConsumption = JSON.parse(
          JSON.stringify(res)
        ).totalEnergyConsumed;
        this.maxConsumption = JSON.parse(JSON.stringify(res)).maxPower;
        this.minConsumption = JSON.parse(JSON.stringify(res)).minPower;
        this.avgConsumption = JSON.parse(JSON.stringify(res)).avgPower;
        this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
        JSON.parse(JSON.stringify(res)).data.loadDailyCharts.forEach(
          (el, i) => {
            this.chartOptions2.series[0].data.push(el.totalEnergyConsume);
            this.chartOptions2.xaxis.categories.push(
              new Date(el.timeStamp).toLocaleString()
            );
          }
        );
        this.functionLineDate = this.chartOptions2.series[0].data;
        console.log(this.chartOptions2.xaxis.categories);
      });
  }

  getEnergyAllFunctionsDefault() {
    this.tabIndex2 =0;
    this.lineChartVisiable2 = true;
      this.tableVisisable2 = false;
      this.barVisisable2 = false;
    this.allFunctionChartData = null;
    this.allFunctionPieData = null;
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Energy',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.tableData = [];
    this.functionsTime = [];
    this.pieFucntions.series = [];
    this.pieFucntions.labels = [];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService.getEnergyByFunctions(1).subscribe((res) => {
      var functionStat = JSON.parse(JSON.stringify(res));
      this.allFunctionConsumptions = functionStat.totalEnergyConsumed;

      this.avgFunctionConsumptio = functionStat.avgConsumption;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      functionStat.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.totalEnergyConsume);

        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });

        this.pieFucntions.series.push(el.totalEnergyConsume);
        this.pieFucntions.labels.push(el.name);
      });
      this.allFunctionPieData = this.pieFucntions.series;
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < functionStat.data.length; i++) {
        this.tableData[i].data = functionStat.data[i].loadDailyCharts.map(
          (el) => el.totalEnergyConsume
        );

        this.allFunctionsChart.series[i].data = functionStat.data[
          i
        ].loadDailyCharts.map((el) => el.totalEnergyConsume);
        this.allFunctionChartData = this.allFunctionsChart.series[i].data;
      }
      this.allFunctionsChart.xaxis.categories =
        functionStat.data[0].loadDailyCharts.map((el) =>
        new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )        );

      this.functionsTime = functionStat.data[0].loadDailyCharts.map((el) =>
      new Date(el.timeStamp).toLocaleString());

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
    });

  }
  getEnergyAllFunctionsTime(time) {
    this.allFunctionChartData = null;
    this.allFunctionPieData = null;
    this.lineChartVisiable2 = true;
      this.tableVisisable2 = false;
      this.barVisisable2 = false;
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Energy',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.tableData = [];
    this.functionsTime = [];
    this.pieFucntions.series = [];
    this.pieFucntions.labels = [];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService.getEnergyByFunctions(time).subscribe((res) => {
      var functionStat = JSON.parse(JSON.stringify(res));
      this.allFunctionConsumptions = functionStat.totalEnergyConsumed;

      this.avgFunctionConsumptio = functionStat.avgConsumption;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      functionStat.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.totalEnergyConsume);


        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });

        this.pieFucntions.series.push(el.totalEnergyConsume);
        this.pieFucntions.labels.push(el.name);
        this.allFunctionPieData = this.pieFucntions.series;
      });
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < functionStat.data.length; i++) {
        this.tableData[i].data = functionStat.data[i].loadDailyCharts.map(
          (el) => el.totalEnergyConsume
        );

        this.allFunctionsChart.series[i].data = functionStat.data[
          i
        ].loadDailyCharts.map((el) => el.totalEnergyConsume);
        this.allFunctionChartData = this.allFunctionsChart.series[i].data;
      }
      this.allFunctionsChart.xaxis.categories =
        functionStat.data[0].loadDailyCharts.map((el) =>
        new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )        );

      this.functionsTime = functionStat.data[0].loadDailyCharts.map((el) =>
      new Date(el.timeStamp).toLocaleString());

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
    });

  }
  getEnergyAllAreasDefault() {
    this.tabIndex2 =0;
    this.lineChartVisiable2 = true;
      this.tableVisisable2 = false;
      this.barVisisable2 = false;
    this.allFunctionChartData = null;
    this.allFunctionPieData = null;
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Energy',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.tableData = [];
    this.functionsTime = [];
    this.pieFucntions.series = [];
    this.pieFucntions.labels = [];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService.getEnergyByAreas(1).subscribe((res) => {
      var functionStat = JSON.parse(JSON.stringify(res));
      this.allFunctionConsumptions = functionStat.totalEnergyConsumed;

      this.avgFunctionConsumptio = functionStat.avgConsumption;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      functionStat.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.totalEnergyConsume);


        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });

        this.pieFucntions.series.push(el.totalEnergyConsume);
        this.pieFucntions.labels.push(el.name);
      });
      this.allFunctionPieData = this.pieFucntions.series;
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < functionStat.data.length; i++) {
        this.tableData[i].data = functionStat.data[i].loadDailyCharts.map(
          (el) => el.totalEnergyConsume
        );

        this.allFunctionsChart.series[i].data = functionStat.data[
          i
        ].loadDailyCharts.map((el) => el.totalEnergyConsume);
        this.allFunctionChartData = this.allFunctionsChart.series[i].data;
      }
      this.allFunctionsChart.xaxis.categories =
        functionStat.data[0].loadDailyCharts.map((el) =>
        new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )        );

      this.functionsTime = functionStat.data[0].loadDailyCharts.map((el) =>
      new Date(el.timeStamp).toLocaleString());

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
    });

  }
  getEnergyAllAreasTime(time) {
    this.lineChartVisiable2 = true;
      this.tableVisisable2 = false;
      this.barVisisable2 = false;
    this.allFunctionChartData = null;
    this.allFunctionPieData = null;
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series= [
      {
        name:'Energy',
        data:[]
      }
    ],
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.tableData = [];
    this.functionsTime = [];
    this.pieFucntions.series = [];
    this.pieFucntions.labels = [];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService.getEnergyByAreas(time).subscribe((res) => {
      var functionStat = JSON.parse(JSON.stringify(res));
      this.allFunctionConsumptions = functionStat.totalEnergyConsumed;

      this.avgFunctionConsumptio = functionStat.avgConsumption;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;

      functionStat.data.forEach((el) => {
        this.allFunctionsChart.series.push({
          name: el.name,
          data: [],
        });
        this.allFunctionsBar.series[0].data.push(el.totalEnergyConsume);


        this.allFunctionsBar.xaxis.categories.push(el.name);
        this.tableData.push({
          name: el.name,
          data: [],
        });

        this.pieFucntions.series.push(el.totalEnergyConsume);
        this.pieFucntions.labels.push(el.name);
        this.allFunctionPieData = this.pieFucntions.series;
      });
      console.log(
        this.allFunctionsBar.series,
        this.allFunctionsBar.xaxis.categories
      );
      for (let i = 0; i < functionStat.data.length; i++) {
        this.tableData[i].data = functionStat.data[i].loadDailyCharts.map(
          (el) => el.totalEnergyConsume
        );

        this.allFunctionsChart.series[i].data = functionStat.data[
          i
        ].loadDailyCharts.map((el) => el.totalEnergyConsume);
        this.allFunctionChartData = this.allFunctionsChart.series[i].data;
      }
      this.allFunctionsChart.xaxis.categories =
        functionStat.data[0].loadDailyCharts.map((el) =>
        new Date(el.timeStamp).setHours( new Date(el.timeStamp).getHours() + 2 )        );

      this.functionsTime = functionStat.data[0].loadDailyCharts.map((el) =>
      new Date(el.timeStamp).toLocaleString());

      console.log(this.allFunctionsChart.series);
      console.log(this.tableData);
    });

  }

  getEnergyAllFunctionsDate(from,to) {
    this.allFunctionChartData = null;
    this.allFunctionPieData = null;
    this.allFunctionsChart.series = [];
    this.allFunctionsBar.series = [];
    this.allFunctionsBar.xaxis.categories = [];
    this.allFunctionsChart.xaxis.categories = [];
    this.tableData = [];
    this.functionsTime = [];
    this.pieFucntions.series = [];
    this.pieFucntions.labels = [];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService
      .getEnergyByFunctionsDate(
        from,to
      )
      .subscribe((res) => {
        var functionStat = JSON.parse(JSON.stringify(res));
        this.allFunctionConsumptions = functionStat.totalEnergyConsumed;

        this.avgFunctionConsumptio = functionStat.avgConsumption;
        this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;

        functionStat.data.forEach((el) => {
          this.allFunctionsChart.series.push({
            name: el.name,
            data: [],
          });
          this.allFunctionsBar.series.push({
            name: el.name,
            data: [el.totalEnergyConsume],
          });

          this.allFunctionsBar.xaxis.categories.push(el.name);
          this.tableData.push({
            name: el.name,
            data: [],
          });

          this.pieFucntions.series.push(el.totalEnergyConsume);
          this.pieFucntions.labels.push(el.name);
          this.allFunctionPieData = this.pieFucntions.series;
        });
        console.log(
          this.allFunctionsBar.series,
          this.allFunctionsBar.xaxis.categories
        );
        for (let i = 0; i < functionStat.data.length; i++) {
          this.tableData[i].data = functionStat.data[i].loadDailyCharts.map(
            (el) => el.totalEnergyConsume
          );

          this.allFunctionsChart.series[i].data = functionStat.data[
            i
          ].loadDailyCharts.map((el) => el.totalEnergyConsume);
          this.allFunctionChartData = this.allFunctionsChart.series[i].data;
        }
        this.allFunctionsChart.xaxis.categories =
          functionStat.data[0].loadDailyCharts.map((el) =>
            new Date(el.timeStamp).setDate( new Date(el.timeStamp).getDate() )
          );

        this.functionsTime = functionStat.data[0].loadDailyCharts.map((el) =>
          new Date(el.timeStamp).toLocaleString()
        );

        console.log(this.allFunctionsChart.xaxis.categories);
        console.log(this.tableData);
      });

  }

  getEnergyAllLoadsDefault() {
    this.tabIndex2 =0;
    this.allLoadsPieData = null;
    this.allLoadsChartData = null;
    this.allLoadsBar.series= [
      {
        name:'Energy',
        data:[]
      }
    ],
    this.allLoadsChartData = [];
    this.allLoadsBar.xaxis.categories= [];
    this.tableLoadsData= [];
    this.pieLoads.series=[];
    this.pieLoads.labels= [];
    this.allLoadsPieData=[];
    this.LoadsTime=[];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService.getEnergyByLoads(1).subscribe((res) => {
      var loadStat = JSON.parse(JSON.stringify(res));
      this.avgLoadConsumptio = loadStat.avgConsumption;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      loadStat.data.forEach((el,i) => {
        this.allLoadsBar.series[0].data.push(el.totalEnergyConsume);


        this.allLoadsBar.xaxis.categories.push(el.name);
        this.tableLoadsData.push({
          name: el.name,
          data: [],
        });
        this.pieLoads.series.push(el.totalEnergyConsume);
        this.pieLoads.labels.push(el.name);

      });
      for (let i = 0; i < loadStat.data.length; i++) {
        this.tableLoadsData[i].data = loadStat.data[i].energyDailyCharts.map(
          (el) => el.energyConsumed
        );
      }
      this.allLoadsChartData = this.allLoadsBar.series;
      this.allLoadsPieData = this.pieLoads.series;

      this.LoadsTime = loadStat.data[0].energyDailyCharts.map((el) =>
      new Date(el.timeStamp).toLocaleString());

      console.log(this.tableLoadsData);
    });
  }

  getEnergyAllLoadsTime(time) {
    this.allLoadsPieData = null;
    this.allLoadsChartData = null;
    this.allLoadsBar.series= [
      {
        name:'Energy',
        data:[]
      }
    ],
    this.allLoadsChartData = [];
    this.allLoadsBar.xaxis.categories= [];
    this.tableLoadsData= [];
    this.pieLoads.series=[];
    this.pieLoads.labels= [];
    this.allLoadsPieData=[];
    this.LoadsTime=[];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService.getEnergyByLoads(1).subscribe((res) => {
      var loadStat = JSON.parse(JSON.stringify(res));
      this.avgLoadConsumptio = loadStat.avgConsumption;
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;
      loadStat.data.forEach((el,i) => {
        this.allLoadsBar.series[0].data.push(el.totalEnergyConsume);


        this.allLoadsBar.xaxis.categories.push(el.name);
        this.tableLoadsData.push({
          name: el.name,
          data: [],
        });
        this.pieLoads.series.push(el.totalEnergyConsume);
        this.pieLoads.labels.push(el.name);

      });
      for (let i = 0; i < loadStat.data.length; i++) {
        this.tableLoadsData[i].data = loadStat.data[i].energyDailyCharts.map(
          (el) => el.energyConsumed
        );
      }
      this.allLoadsChartData = this.allLoadsBar.series;
      this.allLoadsPieData = this.pieLoads.series;

      this.LoadsTime = loadStat.data[0].energyDailyCharts.map((el) =>
      new Date(el.timeStamp).toLocaleString());

      console.log(this.tableLoadsData);
    });
  }
  getEnergyAllLoadsDate(from,to) {
    this.allLoadsPieData = null;
    this.allLoadsChartData = null;
    this.allLoadsBar.xaxis.categories = [];
    this.allLoadsBar.series = [];
    this.tableLoadsData = [];
    this.LoadsTime = [];
    this.pieLoads.series = [];
    this.pieLoads.labels = [];
    this.totalConsumption1 = 0;
  this.totalConsumption2 = 0;
  this.totalConsumption3 = 0;
    this.energyService
      .getEnergyByLoadsDate(
        from,to
      )
      .subscribe((res) => {
        var loadStat = JSON.parse(JSON.stringify(res));
        this.avgLoadConsumptio = loadStat.avgConsumption;
        this.totalConsumption1 = JSON.parse(JSON.stringify(res)).totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).totalConsumption3;

        loadStat.data.forEach((el,i) => {
          this.allLoadsBar.series.push({
            name: el.name,
            data: [el.totalEnergyConsume],
          });
          this.allLoadsChartData = this.allLoadsBar.series[i].data;
          this.allLoadsBar.xaxis.categories.push(el.name);
          this.tableLoadsData.push({
            name: el.name,
            data: [],
          });
          this.pieLoads.series.push(el.totalEnergyConsume);
          this.pieLoads.labels.push(el.name);
          this.allLoadsPieData = this.pieLoads.series;
        });
        for (let i = 0; i < loadStat.data.length; i++) {
          this.tableLoadsData[i].data = loadStat.data[i].energyDailyCharts.map(
            (el) => el.energyConsumed
          );
        }
        this.LoadsTime = loadStat.data[0].energyDailyCharts.map((el) =>
          new Date(el.timeStamp).toLocaleString()
        );

        console.log(this.tableLoadsData);
      });
  }

  getEnergyLoadDefault(loadId) {
    this.tabIndex2 =0;
    this.liveLoadChart(loadId);
    this.loadDataSpecific = null;
    this.loadLine.series= [
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
    ];
    this.loadData[0].data = [];
    this.loadLine.xaxis.categories = [];
    this.loadData[0].time = [];
    this.loadData = [{ name: '', time: [], data: [] }];
    this.maxC =0;
    this.maxV = 0;
    this.avgC = 0;
    this.avgV - 0;
    this.specificLoadConsumption = 0;
    this.maxLoadConsumption1 = 0;
    this.minLoadConsumption1 = 0;
    this.maxLoadConsumption2 = 0;
    this.minLoadConsumption2 = 0;
    this.maxLoadConsumption3 = 0;
    this.maxLoadConsumption3 = 0;
    this.energyService.getEnergyByLoad(loadId, 1).subscribe((res) => {
      var loadStat = JSON.parse(JSON.stringify(res));
      this.maxC = loadStat.data.energyConsumptionStatistics.maxCurrent;
      this.maxV = loadStat.data.energyConsumptionStatistics.maxVoltage;
      this.avgC = loadStat.data.energyConsumptionStatistics.avgCurrent;
      this.avgV = loadStat.data.energyConsumptionStatistics.avgVoltage;

      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).data.energyConsumptionStatistics.totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).data.energyConsumptionStatistics.totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).data.energyConsumptionStatistics.totalConsumption3;
      this.specificLoadConsumption =
        loadStat.data.energyConsumptionStatistics.totalEnergyConsumed;
        console.log(this.specificLoadConsumption);
      this.maxLoadConsumption =
        loadStat.data.energyConsumptionStatistics.maxPower;
      this.minLoadConsumption =
        loadStat.data.energyConsumptionStatistics.minPower;

        this.maxLoadConsumption1 =
        loadStat.data.energyConsumptionStatistics.maxPower1;
      this.minLoadConsumption1 =
        loadStat.data.energyConsumptionStatistics.minPower1;

        this.maxLoadConsumption2 =
        loadStat.data.energyConsumptionStatistics.maxPower2;
      this.minLoadConsumption2 =
        loadStat.data.energyConsumptionStatistics.minPower2;

        this.maxLoadConsumption3 =
        loadStat.data.energyConsumptionStatistics.maxPower3;
      this.minLoadConsumption3 =
        loadStat.data.energyConsumptionStatistics.minPower3;
      console.log(this.loadLine.series[1].data);
      loadStat.data.tableData.data.forEach((element) => {
        this.loadLine.series[0].data.push(element.energyConsumedd1);
        this.loadLine.series[1].data.push(element.energyConsumedd2);
        this.loadLine.series[2].data.push(element.energyConsumedd3);
        this.loadData[0].data.push(element.energyConsumedd);
        this.loadLine.xaxis.categories.push(
          new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 ));
        this.loadData[0].time.push(
          new Date(element.timeStamp).toLocaleString());
      });
      this.loadDataSpecific = this.loadLine.series[0].data;
      console.log(
        this.loadLine.series,
        this.loadData,
        this.specificLoadConsumption
      );
    });
  }
  getEnergyLoadTime(loadId, time) {
    this.loadDataSpecific = null;
    this.loadLine.series= [
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
    ];
    this.loadData[0].data = [];
    this.loadLine.xaxis.categories = [];
    this.loadData[0].time = [];
    this.loadData = [{ name: '', time: [], data: [] }];
    clearInterval(this.interval);
    this.maxC =0;
    this.maxV = 0;
    this.avgC = 0;
    this.avgV - 0;
    this.specificLoadConsumption = 0;
    this.maxLoadConsumption1 = 0;
    this.minLoadConsumption1 = 0;
    this.maxLoadConsumption2 = 0;
    this.minLoadConsumption2 = 0;
    this.maxLoadConsumption3 = 0;
    this.maxLoadConsumption3 = 0;
    this.energyService.getEnergyByLoad(loadId, time).subscribe((res) => {
      var loadStat = JSON.parse(JSON.stringify(res));
      this.totalConsumption1 = JSON.parse(JSON.stringify(res)).data.energyConsumptionStatistics.totalConsumption1;
      this.totalConsumption2 = JSON.parse(JSON.stringify(res)).data.energyConsumptionStatistics.totalConsumption2;
      this.totalConsumption3 = JSON.parse(JSON.stringify(res)).data.energyConsumptionStatistics.totalConsumption3;
      this.maxC = loadStat.data.energyConsumptionStatistics.maxCurrent;
      this.maxV = loadStat.data.energyConsumptionStatistics.maxVoltage;
      this.avgC = loadStat.data.energyConsumptionStatistics.avgCurrent;
      this.avgV = loadStat.data.energyConsumptionStatistics.avgVoltage;
      this.specificLoadConsumption =
        loadStat.data.energyConsumptionStatistics.totalEnergyConsumed;
      this.maxLoadConsumption =
        loadStat.data.energyConsumptionStatistics.maxPower;
      this.minLoadConsumption =
        loadStat.data.energyConsumptionStatistics.minPower;
        this.maxLoadConsumption1 =
        loadStat.data.energyConsumptionStatistics.maxPower1;
      this.minLoadConsumption1 =
        loadStat.data.energyConsumptionStatistics.minPower1;

        this.maxLoadConsumption2 =
        loadStat.data.energyConsumptionStatistics.maxPower2;
      this.minLoadConsumption2 =
        loadStat.data.energyConsumptionStatistics.minPower2;

        this.maxLoadConsumption3 =
        loadStat.data.energyConsumptionStatistics.maxPower3;
      this.minLoadConsumption3 =
        loadStat.data.energyConsumptionStatistics.minPower3;
      console.log(this.loadLine.series[1].data);
      loadStat.data.tableData.data.forEach((element) => {
        this.loadLine.series[0].data.push(element.energyConsumedd1);
        this.loadLine.series[1].data.push(element.energyConsumedd2);
        this.loadLine.series[2].data.push(element.energyConsumedd3);
        this.loadData[0].data.push(element.energyConsumedd);
        this.loadLine.xaxis.categories.push(
          new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 )
        );
        this.loadData[0].time.push(
          new Date(element.timeStamp).toLocaleString()
        );
      });
      this.loadDataSpecific = this.loadLine.series[0].data;
      console.log(
        this.loadLine.series,
        this.loadData,
        this.specificLoadConsumption
      );
    });

  }
  liveLoadChart(load){
    this.loadLiveLine.xaxis.categories = [];

    this.energyService.getEnergyByLoad(load, 0).subscribe((res) => {
      var loadStats = JSON.parse(JSON.stringify(res));
        this.loadLiveLine.series= [
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
        ];

        this.loadLiveLine.xaxis.type = 'datetime';





      loadStats.data.tableData.data.forEach((element) => {
        this.loadLiveLine.series[0].data.push(element.energyConsumedd1);
        this.loadLiveLine.series[1].data.push(element.energyConsumedd2);
        this.loadLiveLine.series[2].data.push(element.energyConsumedd3);


        this.loadLiveLine.xaxis.categories.push(
          new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 )
        );



      });
      this.loadLiveLine.xaxis.categories = this.loadData[0].time;
      console.log(
        this.loadLiveLine.series,
        this.loadData,
        this.specificLoadConsumption
      );
    });
      this.interval =  setInterval(() => {
        this.loadLiveLine.xaxis.categories = [];

    this.energyService.getEnergyByLoad(load, 0).subscribe((res) => {
      var loadStats = JSON.parse(JSON.stringify(res));
        this.loadLiveLine.series= [
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
        ];

        this.loadLiveLine.xaxis.type = 'datetime';





      loadStats.data.tableData.data.forEach((element) => {
        this.loadLiveLine.series[0].data.push(element.energyConsumedd1);
        this.loadLiveLine.series[1].data.push(element.energyConsumedd2);
        this.loadLiveLine.series[2].data.push(element.energyConsumedd3);


        this.loadLiveLine.xaxis.categories.push(
          new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2 )
        );



      });

      console.log(
        this.loadLiveLine.series,
        this.loadData,
        this.specificLoadConsumption
      );
    });
      },20000);

  }

  getEnergyLoadDate(loadId,from,to) {
    this.loadDataSpecific = null;
    this.loadLine.series= [
      {
        name: '',
        data: [],
      },
    ];
    this.loadData[0].data = [];
    this.loadLine.xaxis.categories = [];
    this.loadData[0].time = [];
    this.loadData = [{ name: '', time: [], data: [] }];

    this.energyService
      .getEnergyByLoadDate(
        loadId,
        from,to
      )
      .subscribe((res) => {
        var loadStat = JSON.parse(JSON.stringify(res));
        this.specificLoadConsumption =
          loadStat.data.energyConsumptionStatistics.totalEnergyConsumed;
        this.maxLoadConsumption =
          loadStat.data.energyConsumptionStatistics.maxPower;
        this.minLoadConsumption =
          loadStat.data.energyConsumptionStatistics.minPower;
        this.loadLine.series[0].name = loadStat.data.summary.loadName;
        loadStat.data.tableData.data.forEach((element) => {
          this.loadLine.series[0].data.push(element.energyConsumed);
          this.loadData[0].data.push(element.energyConsumed);
          this.loadLine.xaxis.categories.push(
            new Date(element.timeStamp).setDate( new Date(element.timeStamp).getDate() )
          );
          this.loadData[0].time.push(
            new Date(element.timeStamp).toLocaleString()
          );
        });
        this.loadDataSpecific = this.loadLine.series[0].data;

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

  this.getEnergyAllFunctionsDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  this.getEnergyAllLoadsDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  this.getEnergyFactoryDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  this.getEnergyFunctionDate(this.funcId,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  this.getEnergyLoadDate(this.loadCode,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
}
public updateSeries() {
  this.chartOptions.series = [{
    data: [23, 44, 1, 22]
  }];
}
}
