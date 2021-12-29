import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
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
import { environment } from 'src/environments/environment';
import * as echarts from 'echarts';
import { graphic, EChartsOption } from 'echarts';
import { FormGroup, FormControl } from '@angular/forms';
import { CompareService } from "../../app/services/compare.service";
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { element } from 'protractor';

export type ChartOptions = {
  chart: ApexChart;
  annotations: ApexAnnotations;
  colors: string[];
  dataLabels: ApexDataLabels;
  series: any;
  stroke: ApexStroke;
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  states: ApexStates;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
  markers: any;


 };

interface FoodNode {
  name: string;
  children?: FoodNode[];
  img:string;
  id:number;
  code:string;
}
interface Report {
    name:string,
    loadCode:string,
    option:string,
    phase1:number,
    phase2:number,
    phase3:number,
    timeStamp:string
}

const TREE_DATA: FoodNode[] = [

];
const reports:Report[]=[];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  img:string;
  level: number;
  id:number;
  code:string;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  lineChart=true;
  barChart=false;
  pieChart=false;
  loadCode:string;
  option=1;
  duration=1;
  resolution=15;
  data:any;
  lineData=null;
  barData=null;
  pieData=null;
  loadData = [{ name: '', time: [], phase1: [] , phase2: [], phase3: []}];
  chart=true;
  table=false;
  dataTable = false;
  dateControl = new FormControl('');
  dateControl2 = new FormControl('');
  From:any;
  To:any;
  from:any;
  to:any;
  loadName= null;
  report={
    name: "",
    loadCode: "",
    option: "",
    phase1: 0,
    phase2: 0,
    phase3: 0,
    timeStamp: ""
  };
  optionName="";
  reportName="";
  totalEnergy=0;
definedReports:any;


  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent:'myTableElementId' // the id of html/table element
  }
  exportAsConfig2: ExportAsConfig = {
    type: 'csv', // the type you want to download
    elementIdOrContent:'myTableElementId' // the id of html/table element
  }
  exportAsConfig3: ExportAsConfig = {
    type: 'xls', // the type you want to download
    elementIdOrContent:'myTableElementId' // the id of html/table element
  }
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      img:node.img,
      level: level,
      id:node.id,
      code:node.code
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private compareService: CompareService,
    private http: HttpClient,private exportAsService: ExportAsService) {

    this.chartOptions = {
      series: [
        {
          name: "Phase 1",
          data: []
        },
        {
          name: "Phase 2",
          data: []
        },
        {
          name: "Phase 3",
          data: []
        },
      ],
      chart: {
        height: 550,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
        ]
      },
        yaxis: {
          labels: {
            formatter: (value,val) => { return value+''+val }
          },
        },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Phase 1",
          data: []
        },
        {
          name: "Phase 2",
          data: []
        },
        {
          name: "Phase 3",
          data: []
        }
      ],
      chart: {
        type: "bar",
        height: 550
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
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

      yaxis: {
        // title: {
        //   text: ""
        // }
      },
      fill: {
        opacity: 1
      },
      xaxis: {
        type: "datetime",
        categories: [
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        },
      }
    };
    this.chartOptions3 = {
      series: [
        {
          name: "Phase 1",
          data: []
        },
        {
          name: "Phase 2",
          data: []
        },
        {
          name: "Phase 3",
          data: []
        }
      ],
      chart: {
        height: 550,
        type: "radar",
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

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },

      colors: ["#009ACF","#009ACF33"],
      markers: {
        size: 1,
        colors: ["#fff"],
        strokeColors: ["#FF4560"],
        strokeWidth: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val;
          }
        }
      },
      legend:{
        show:false,
      },
      xaxis: {
        categories: [

        ]
      },
      yaxis: {
        tickAmount: 7,
        show:false,
      }
    };
   }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
    if(this.option == 1)
    {
      this.optionName = "Current";
    }
    else if(this.option == 2)
    {
      this.optionName = "Voltage";
    }
    else if(this.option == 3)
    {
      this.optionName = "Power Factor";
    }
    else if(this.option == 4)
    {
      this.optionName = "Active Power";
    }
    else if(this.option == 5)
    {
      this.optionName = "Reactive Power";
    }
    else if(this.option == 6)
    {
      this.optionName = "Apparent Power";
    }
    else if(this.option == 7)
    {
      this.optionName = "Energy";
    }
    else if(this.option == 8)
    {
      this.optionName = "Harmonics Current";
    }
    else if(this.option == 9)
    {
      this.optionName = "Harmonics Voltage";
    }
    this.getHierarchyArea();
    this.getReports();

  }
  buttonFunction(el) {
    el.style.backgroundColor = "red";
  }
  getHierarchy(){
    const TREE_DATA: FoodNode[] = [

    ];
    this.dataSource.data = [];
    this.compareService.getHierarchy(1)
  .subscribe(
    (res) => {
      TREE_DATA.push(JSON.parse(JSON.stringify(res)));
      this.dataSource.data = TREE_DATA;
      console.log(TREE_DATA);
    },
    (err) => {
      console.log("Test: ", err);

    }
  );
  }
  getHierarchyArea(){
    const TREE_DATA: FoodNode[] = [

    ];
    this.dataSource.data = [];
    this.compareService.getHierarchyArea(1)
  .subscribe(
    (res) => {
      TREE_DATA.push(JSON.parse(JSON.stringify(res)));
      this.dataSource.data = TREE_DATA;
      console.log(TREE_DATA);
    },
    (err) => {
      console.log("Test: ", err);

    }
  );
  }
  getHierarchySources(){
    const TREE_DATA: FoodNode[] = [

    ];
    this.dataSource.data = [];
    this.compareService.getHierarchySources(1)
  .subscribe(
    (res) => {
      TREE_DATA.push(JSON.parse(JSON.stringify(res)));
      this.dataSource.data = TREE_DATA;
      console.log(TREE_DATA);
    },
    (err) => {
      console.log("Test: ", err);

    }
  );
  }
  setActive = function (buttonName){
    this.activeButton = buttonName;
  }
  isActive = function (buttonName){
    return this.activeButton === buttonName;
  }
  mathS()
  {
    return Math.sqrt(3);
  }
  getReport(){
    this.totalEnergy= 0;
    this.chartOptions.series[0].data = [];
    this.chartOptions.series[1].data = [];
    this.chartOptions.series[2].data = [];
    this.chartOptions.xaxis.categories = [];
    this.chartOptions2.series[0].data = [];
    this.chartOptions2.series[1].data = [];
    this.chartOptions2.series[2].data = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions2.xaxis.categories = [];
    this.chartOptions3.xaxis.categories = [];
    this.lineData = null;
    this.barData=null;
    this.pieData=null;
    this.loadData = [{ name: '', time: [], phase1: [] , phase2: [], phase3: []}];
    console.log(this.loadCode,this.option,this.duration,this.resolution);
    if(this.option == 1)
    {
      this.optionName = "Current";
    }
    else if(this.option == 2)
    {
      this.optionName = "Voltage";
    }
    else if(this.option == 3)
    {
      this.optionName = "Power Factor";
    }
    else if(this.option == 4)
    {
      this.optionName = "Active Power";
    }
    else if(this.option == 5)
    {
      this.optionName = "Reactive Power";
    }
    else if(this.option == 6)
    {
      this.optionName = "Apparent Power";
    }
    else if(this.option == 7)
    {
      this.optionName = "Energy";
    }
    else if(this.option == 8)
    {
      this.optionName = "Harmonics Current";
    }
    else if(this.option == 9)
    {
      this.optionName = "Harmonics Voltage";
    }
    if(this.option == 10)
    {
      this.compareService.getReport(this.loadCode,1,this.duration,this.resolution)
      .subscribe(
        (res) => {
          this.data = JSON.parse(JSON.stringify(res));
          this.data.forEach((element,i) => {

            this.chartOptions.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
           // this.chartOptions2.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
            //this.chartOptions3.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
            this.chartOptions.series[0].data.push(element.phase1.toFixed(2));
            this.chartOptions.series[1].data.push(element.phase2.toFixed(2));
            this.chartOptions.series[2].data.push(element.phase3.toFixed(2));
            this.chartOptions2.series[0].data.push(element.phase1.toFixed(2));
            this.chartOptions2.series[1].data.push(element.phase2.toFixed(2));
            this.chartOptions2.series[2].data.push(element.phase3.toFixed(2));
            this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
            this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
            this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
            this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
            this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
            this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getHours());
          });
          this.lineData= this.chartOptions.series[0].data;
          this.barData= this.chartOptions2.series[0].data;
          this.pieData= this.chartOptions3.series[0].data;
          console.log(this.data);

        },
        (err) => {
          console.log("Test: ", err);

        }
      );
    }
    else if(this.option == 11)
    {
      this.compareService.getReport(this.loadCode,2,this.duration,this.resolution)
  .subscribe(
    (res) => {
      this.data = JSON.parse(JSON.stringify(res));
      this.data.forEach((element,i) => {

        this.chartOptions.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
       // this.chartOptions2.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
        //this.chartOptions3.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
        this.chartOptions.series[0].data.push((element.phase1 * Math.sqrt(3)).toFixed(2));
        this.chartOptions.series[1].data.push((element.phase2 * Math.sqrt(3)).toFixed(2));
        this.chartOptions.series[2].data.push((element.phase3 * Math.sqrt(3)).toFixed(2));
        this.chartOptions2.series[0].data.push((element.phase1 * Math.sqrt(3)).toFixed(2));
        this.chartOptions2.series[1].data.push((element.phase2 * Math.sqrt(3)).toFixed(2));
        this.chartOptions2.series[2].data.push((element.phase3 * Math.sqrt(3)).toFixed(2));
        this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
        this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
        this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
        this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
        this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getHours());
      });
      this.lineData= this.chartOptions.series[0].data;
      this.barData= this.chartOptions2.series[0].data;
      this.pieData= this.chartOptions3.series[0].data;
      console.log(this.data);

    },
    (err) => {
      console.log("Test: ", err);

    }
  );
    }
    else
    {
      this.compareService.getReport(this.loadCode,this.option,this.duration,this.resolution)
  .subscribe(
    (res) => {
      this.data = JSON.parse(JSON.stringify(res));
      this.data.forEach((element,i) => {

        this.chartOptions.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
       // this.chartOptions2.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
        //this.chartOptions3.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
        this.chartOptions.series[0].data.push(element.phase1.toFixed(2));
        this.chartOptions.series[1].data.push(element.phase2.toFixed(2));
        this.chartOptions.series[2].data.push(element.phase3.toFixed(2));
        this.chartOptions2.series[0].data.push(element.phase1.toFixed(2));
        this.chartOptions2.series[1].data.push(element.phase2.toFixed(2));
        this.chartOptions2.series[2].data.push(element.phase3.toFixed(2));
        this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
        this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
        this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
        this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
        this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getHours());
        if(this.option == 7)
        {
          this.totalEnergy = this.totalEnergy + (element.phase1 + element.phase2 +element.phase3)
        }
      });

      this.lineData= this.chartOptions.series[0].data;
      this.barData= this.chartOptions2.series[0].data;
      this.pieData= this.chartOptions3.series[0].data;
      console.log(this.data);

    },
    (err) => {
      console.log("Test: ", err);

    }
  );
    }

  }
  getReportDate(){
    this.totalEnergy = 0;
    this.chartOptions.series[0].data = [];
    this.chartOptions.series[1].data = [];
    this.chartOptions.series[2].data = [];
    this.chartOptions.xaxis.categories = [];
    this.chartOptions2.series[0].data = [];
    this.chartOptions2.series[1].data = [];
    this.chartOptions2.series[2].data = [];
    this.chartOptions3.series[0].data = [];
    this.chartOptions3.series[1].data = [];
    this.chartOptions3.series[2].data = [];
    this.chartOptions2.xaxis.categories = [];
    this.chartOptions3.xaxis.categories = [];
    this.lineData = null;
    this.barData=null;
    this.pieData=null;
    this.loadData = [{ name: '', time: [], phase1: [] , phase2: [], phase3: []}];
    console.log(this.loadCode,this.option,this.From,this.To,this.resolution);
    this.compareService.getReportDate(this.loadCode,this.option,this.From,this.To,this.resolution)
  .subscribe(
    (res) => {
      this.data = JSON.parse(JSON.stringify(res));
      this.data.forEach((element,i) => {
        this.chartOptions.series[0].data.push(element.phase1.toFixed(2));
        this.chartOptions.series[1].data.push(element.phase2.toFixed(2));
        this.chartOptions.series[2].data.push(element.phase3.toFixed(2));
        this.chartOptions2.series[0].data.push(element.phase1.toFixed(2));
        this.chartOptions2.series[1].data.push(element.phase2.toFixed(2));
        this.chartOptions2.series[2].data.push(element.phase3.toFixed(2));
        this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
        this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
        this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
        this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
        this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours( new Date(element.timeStamp).getHours() + 2));
        this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getDate());
        if(this.option == 7)
        {
          this.totalEnergy = this.totalEnergy + (element.phase1 + element.phase2 +element.phase3)
        }
     });
      this.lineData= this.chartOptions.series[0].data;
      this.barData= this.chartOptions2.series[0].data;
      this.pieData= this.chartOptions3.series[0].data;
      console.log(this.data);
    },
    (err) => {
      console.log("Test: ", err);

    }
  );
  }
  postReports(){
    this.data.forEach((element,i) => {
      reports.push(
        {
          name: this.reportName,
          loadCode: this.data[0].name,
          option: this.optionName,
          phase1: element.phase1,
          phase2: element.phase2,
          phase3: element.phase3,
          timeStamp: element.timeStamp
        }

      )
    });
    console.log(reports);

    this.compareService.postReport(reports)
    .subscribe(
      (res) => {
        console.log(res);
        // if(res)
        // this.toastr.success('Hello world!', 'Toastr fun!');
      }
    )
  }
  getReports(){
    this.compareService.getReports()
    .subscribe(
      (res) => {
        this.definedReports = JSON.parse(JSON.stringify(res));
      }
    )
  }
  changeTab(tab) {
    if (tab.index == 0) {
      this.chart = true;
      this.table = false;
      this.dataTable = false;
    } else if (tab.index == 1) {
      this.chart = false;
      this.table = true;
      this.dataTable = false;
    }else if (tab.index == 2) {
      this.chart = false;
      this.table = false;
      this.dataTable = true;
    }
  }
  getTime(time)
  {
    return new Date(time).toLocaleString();
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

  //this.getReportDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  // this.getEnergyAllLoadsDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  // this.getEnergyFactoryDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  // this.getEnergyFunctionDate(this.funcId,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
  // this.getEnergyLoadDate(this.loadCode,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
}
download()
{
  this.exportAsService.save(this.exportAsConfig,`${this.optionName+' '+new Date().toDateString()}`);
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig).subscribe(content => {
      console.log(content);
    });
}
download2()
{
  this.exportAsService.save(this.exportAsConfig2, `${this.optionName+' '+new Date().toDateString()}`);
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig2).subscribe(content => {
      console.log(content);
    });
}
download3()
{
  this.exportAsService.save(this.exportAsConfig3, `${this.optionName+' '+new Date().toDateString()}`);
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig3).subscribe(content => {
      console.log(content);
    });
}
}
