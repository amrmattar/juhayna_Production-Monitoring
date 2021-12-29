import { Component, OnInit, ViewChild  } from '@angular/core';
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
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
  ApexLegend
} from "ng-apexcharts";
import {MatMenuModule} from '@angular/material/menu';
import { HttpClient } from "@angular/common/http";
import { CompareService } from "../../app/services/compare.service";
import { environment } from "src/environments/environment";

export type ChartOptions = {
  chart: ApexChart;
  annotations: ApexAnnotations;
  colors: string[];
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries ;
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

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-compare-loads',
  templateUrl: './compare-loads.component.html',
  styleUrls: ['./compare-loads.component.css']
})
export class CompareLoadsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public current: Partial<ChartOptions>;
  public voltage: Partial<ChartOptions>;
  public frequency: Partial<ChartOptions>;
  public pf: Partial<ChartOptions>;
  public ap: Partial<ChartOptions>;
  lineChartVisiable= true;
  tableVisisable = false;
  functionRender = false;
  factoryRender = false;
  loadRender = false;

  currentRender = true;
  voltageRender = false;
  frequencyRender = false;
  pfRender = false;
  apparentRender = false;

  loads=[];
  loadId1='';
  loadId2='';
  loadName1='';
  loadName2='';
  load1:any;
  load2:any;
  load1Chart:any;
  load2Chart:any;
  currentLoad1=0;
  voltageLoad1=0;
  frequencyLoad1=0;
  pfLoad1=0;
  apLoad1=0;
  currentLoad2=0;
  voltageLoad2=0;
  frequencyLoad2=0;
  pfLoad2=0;
  apLoad2=0;


  currentLoad1Ref=0;
  voltageLoad1Ref=0;
  frequencyLoad1Ref=0;
  pfLoad1Ref=0;
  apLoad1Ref=0;
  currentLoad2Ref=0;
  voltageLoad2Ref=0;
  frequencyLoad2Ref=0;
  pfLoad2Ref=0;
  apLoad2Ref=0;

  checked1 = true;
  checked2 = false;
  loadRef='load1';
  constructor(private compareService: CompareService,
    private http: HttpClient) {

    this.current = {
      series: [
        {
          name: "Load1",
          data: []
        },
        {
          name: "Load2",
          data: []
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
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.voltage = {
      series: [
        {
          name: "Load1",
          data: []
        },
        {
          name: "Load2",
          data: []
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
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.frequency = {
      series: [
        {
          name: "Load1",
          data: []
        },
        {
          name: "Load2",
          data: []
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
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.pf = {
      series: [
        {
          name: "Load1",
          data: []
        },
        {
          name: "Load2",
          data: []
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
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.ap= {
      series: [
        {
          name: "Load1",
          data: []
        },
        {
          name: "Load2",
          data: []
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
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
dagta:any;
  ngOnInit(): void {
    this.getAllLoads();

  }


  getAllLoads(){
    this.http
      .get(`${environment.servicesUrl}/Loads`)
      .subscribe((Response) => {
        this.loads = JSON.parse(JSON.stringify(Response));
        // this.routeSummary = data.routeSummary;
        //this.processesSummaryList = data.processesSummaryList;
      });
  };
  changeParaTab(tab)
  {
    if(tab.index == 0)
    {
      this.currentRender = true;
      this.voltageRender = false;
      this.frequencyRender = false;
      this.pfRender = false;
      this.apparentRender = false;
    }
    else if(tab.index == 1){
      this.currentRender = false;
      this.voltageRender = true;
      this.frequencyRender = false;
      this.pfRender = false;
      this.apparentRender = false;
    }
    else if(tab.index == 2){
      this.currentRender = false;
      this.voltageRender = false;
      this.frequencyRender = true;
      this.pfRender = false;
      this.apparentRender = false;
    }
    else if(tab.index == 3){
      this.currentRender = false;
      this.voltageRender = false;
      this.frequencyRender = false;
      this.pfRender = true;
      this.apparentRender = false;
    }
    else if(tab.index == 4){
      this.currentRender = false;
      this.voltageRender = false;
      this.frequencyRender = false;
      this.pfRender = false;
      this.apparentRender = true;
    }

  }
  changeTab(tab)
  {
    if(tab.index == 0)
    {
      this.lineChartVisiable = true;
      this.tableVisisable = false;
    }
    else if(tab.index == 1){
      this.lineChartVisiable = false;
      this.tableVisisable = true;
    }
  }
  changeChecked(){
    if(this.checked2 == true)
    {
      this.loadRef = 'load2'
    }
    else{
      this.loadRef = ''
    }
  }
log(){
  console.log(this.checked2);

}
  getCompareDefault(){
    this.compareService.getCompareValues(this.loadId1,this.loadId2)
    .subscribe(
      (res) => {
        this.load1 = JSON.parse(JSON.stringify(res)).load1;
        this.load2 = JSON.parse(JSON.stringify(res)).load2;


        this.currentLoad1 = (this.load1.current1Load1 + this.load1.current2Load1+this.load1.current3Load1)/3;
        this.voltageLoad1 = (this.load1.voltage1Load1 + this.load1.voltage2Load1+this.load1.voltage3Load1)/3;
        this.frequencyLoad1 = (this.load1.frequency1Load1 + this.load1.frequency2Load1+this.load1.frequency3Load1)/3;
        this.pfLoad1 = (this.load1.pf1Load1 + this.load1.pf2Load1+this.load1.pf3Load1)/3;
        this.apLoad1 = (((this.load1.current1Load1 + this.load1.current2Load1+this.load1.current3Load1)/3)*((this.load1.voltage1Load1 + this.load1.voltage2Load1+this.load1.voltage3Load1)/3))/1000;

        this.currentLoad2 = (this.load2.current1Load2 + this.load2.current2Load2+this.load2.current3Load2)/3;
        this.voltageLoad2 = (this.load2.voltage1Load2 + this.load2.voltage2Load2+this.load2.voltage3Load2)/3;
        this.frequencyLoad2 = (this.load2.frequency1Load2 + this.load2.frequency2Load2+this.load2.frequency3Load2)/3;
        this.pfLoad2 = (this.load2.pf1Load2 + this.load2.pf2Load2+this.load2.pf3Load2)/3;
        this.apLoad2 = (((this.load2.current1Load2 + this.load2.current2Load2+this.load2.current3Load2)/3)*((this.load2.voltage1Load2 + this.load2.voltage2Load2+this.load2.voltage3Load2)/3))/1000;

        this.loadName1 = this.loads.find(el => el.code == this.loadId1).name;
        this.loadName2 = this.loads.find(el => el.code == this.loadId2).name;



        this.currentLoad1Ref=this.currentLoad1 - this.currentLoad2;
        this.voltageLoad1Ref=this.voltageLoad1 - this.voltageLoad2;
        this.frequencyLoad1Ref=this.frequencyLoad1 - this.frequencyLoad2;
        this.pfLoad1Ref=this.pfLoad1 - this.pfLoad2;
        this.apLoad1Ref=this.apLoad1 - this.apLoad2;
        this.currentLoad2Ref=this.currentLoad2 - this.currentLoad1;
        this.voltageLoad2Ref=this.voltageLoad2 - this.voltageLoad1;
        this.frequencyLoad2Ref=this.frequencyLoad2 - this.frequencyLoad1;
        this.pfLoad2Ref=this.pfLoad2 - this.pfLoad1;
        this.apLoad2Ref=this.apLoad2 - this.apLoad1;

        console.log(this.load1);

      },
      (err) => {
        console.log("Test: ", err);

      }
    );
  };
getCompareCharts(){
  this.dagta= null;
  this.compareService.getCompareChart(this.loadId1,this.loadId2,1)
    .subscribe(
      (res) => {
        this.load1Chart = JSON.parse(JSON.stringify(res)).load1;
        this.load2Chart = JSON.parse(JSON.stringify(res)).load2;
        console.log(this.load1Chart.avgCurrent1);
        this.load1Chart.avgCurrent1.forEach(element => {
          this.current.series[0].data.push(element.current1);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.avgVoltage1.forEach(element => {
          this.voltage.series[0].data.push(element.voltage1);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load1Chart.avgFrequency1.forEach(element => {
          this.frequency.series[0].data.push(element.frequency1);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load1Chart.avgPowerFactor1.forEach(element => {
          this.pf.series[0].data.push(element.powerFactor1);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });



        this.load2Chart.avgCurrent2.forEach(element => {
          this.current.series[1].data.push(element.current1);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.avgVoltage2.forEach(element => {
          this.voltage.series[1].data.push(element.voltage1);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load2Chart.avgFrequency2.forEach(element => {
          this.frequency.series[1].data.push(element.frequency1);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load2Chart.avgPowerFactor2.forEach(element => {
          this.pf.series[1].data.push(element.powerFactor1);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        console.log(this.voltage.series[0]);
        this.dagta = this.current.series;

      },
      (err) => {
        console.log("Test: ", err);

      }
    );
}
  // log(){
  //   console.log(this.loadId1);

  // }
}
