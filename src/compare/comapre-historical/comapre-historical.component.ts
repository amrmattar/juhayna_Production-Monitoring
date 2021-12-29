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
  selector: 'app-comapre-historical',
  templateUrl: './comapre-historical.component.html',
  styleUrls: ['./comapre-historical.component.css']
})
export class ComapreHistoricalComponent implements OnInit {
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
  public energy: Partial<ChartOptions>;
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
  energyRender = false;

  loads=[];
  loadId1='';
  loadId2='';
  loadName1='';
  loadName2='';
  load1:any;
  load2:any;
  load1Chart:any;
  load2Chart:any;

  i1Load1=0;
  v1Load1=0;
  pact1Load1=0;
  pF1Load1=0;
  papp1Load1=0;
  energy1Load1=0;
  i1Load2=0;
  v1Load2=0;
  pact1Load2=0;
  pF1Load2=0;
  papp1Load2=0;
  energy1Load2=0;

  i2Load1=0;
  v2Load1=0;
  pact2Load1=0;
  pF2Load1=0;
  papp2Load1=0;
  energy2Load1=0;
  i2Load2=0;
  v2Load2=0;
  pact2Load2=0;
  pF2Load2=0;
  papp2Load2=0;
  energy2Load2=0;

  i3Load1=0;
  v3Load1=0;
  pact3Load1=0;
  pF3Load1=0;
  papp3Load1=0;
  energy3Load1=0;
  i3Load2=0;
  v3Load2=0;
  pact3Load2=0;
  pF3Load2=0;
  papp3Load2=0;
  energy3Load2=0;

  totalEnergyLoad1 = 0;
  totalEnergyLoad2 = 0;

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
  loading=true;
  notLoading = false;
  tabIndex = 0;

  onTabClick(index) {
    this.tabIndex = index;
  }
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
        },
        y: {
          formatter: function(val) {
            return  val + " A";
          }
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
        },
        y: {
          formatter: function(val) {
            return  val + " V";
          }
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
        },
        y: {
          formatter: function(val) {
            return  val + " KWH";
          }
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
        },
        y: {
          formatter: function(val) {
            return  val + " KVA";
          }
        }
      }
    };
    this.energy= {
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
        },
        y: {
          formatter: function(val) {
            return  val + " KWH";
          }
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
      this.energyRender = false;
    }
    else if(tab.index == 1){
      this.currentRender = false;
      this.voltageRender = true;
      this.frequencyRender = false;
      this.pfRender = false;
      this.apparentRender = false;
      this.energyRender = false;
    }
    else if(tab.index == 2){
      this.currentRender = false;
      this.voltageRender = false;
      this.frequencyRender = true;
      this.pfRender = false;
      this.apparentRender = false;
      this.energyRender = false;
    }
    else if(tab.index == 3){
      this.currentRender = false;
      this.voltageRender = false;
      this.frequencyRender = false;
      this.pfRender = true;
      this.apparentRender = false;
      this.energyRender = false;
    }
    else if(tab.index == 4){
      this.currentRender = false;
      this.voltageRender = false;
      this.frequencyRender = false;
      this.pfRender = false;
      this.apparentRender = true;
      this.energyRender = false;
    }
    else if(tab.index == 5){
      this.currentRender = false;
      this.voltageRender = false;
      this.frequencyRender = false;
      this.pfRender = false;
      this.apparentRender = false;
      this.energyRender = true;
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
    this.notLoading = true;
    this.loading = true;
    this.compareService.getCompareHistoricValues(this.loadId1,this.loadId2,1)
    .subscribe(
      (res) => {
        this.load1 = JSON.parse(JSON.stringify(res)).load1;
        this.load2 = JSON.parse(JSON.stringify(res)).load2;


        this.i1Load1 = (this.load1.i1Load1);
        this.v1Load1 = (this.load1.v1Load1 );
        this.pact1Load1 = (this.load1.pact1Load1);
        this.pF1Load1 = (this.load1.pF1Load1);
        this.papp1Load1 = (this.load1.papp1Load1);
        this.energy1Load1 = (this.load1.energy1Load1);

        this.i1Load2 = (this.load2.i1Load2);
        this.v1Load2 = (this.load2.v1Load2);
        this.pact1Load2 = (this.load2.pact1Load2);
        this.pF1Load2 = (this.load2.pF1Load2 );
        this.papp1Load2 = (this.load2.papp1Load2);
        this.energy1Load2 = (this.load2.energy1Load2);

        this.i2Load1 = (this.load1.i2Load1);
        this.v2Load1 = (this.load1.v2Load1);
        this.pact2Load1 = (this.load1.pact2Load1);
        this.pF2Load1 = (this.load1.pF2Load1);
        this.papp2Load1 = (this.load1.papp2Load1);
        this.energy2Load1 = (this.load1.energy2Load1);

        this.i2Load2 = ( this.load2.i2Load2);
        this.v2Load2 = (this.load2.v2Load2);
        this.pact2Load2 = (this.load2.pact2Load2);
        this.pF2Load2 = (this.load2.pF2Load2);
        this.papp2Load2 = (this.load2.papp2Load2);
        this.energy2Load2 = (this.load2.energy2Load2);

        this.i3Load1 = (this.load1.i3Load1);
        this.v3Load1 = (this.load1.v3Load1);
        this.pact3Load1 = (this.load1.pact3Load1);
        this.pF3Load1 = (this.load1.pF3Load1);
        this.papp3Load1 = (this.load1.papp3Load1);
        this.energy3Load1 = (this.load1.energy3Load1);

        this.i3Load2 = (this.load2.i3Load2);
        this.v3Load2 = (this.load2.v3Load2);
        this.pact3Load2 = (this.load2.pact3Load2);
        this.pF3Load2 = (this.load2.pF3Load2);
        this.papp3Load2 = (this.load2.papp3Load2);
        this.energy3Load2 = (this.load2.energy3Load2);


        this.loadName1 = this.loads.find(el => el.code == this.loadId1).name;
        this.loadName2 = this.loads.find(el => el.code == this.loadId2).name;

        this.totalEnergyLoad1 = this.energy1Load1 + this.energy2Load1 + this.energy3Load1;
        this.totalEnergyLoad2 = this.energy1Load2 + this.energy2Load2 + this.energy3Load2;



        // this.currentLoad1Ref=this.currentLoad1 - this.currentLoad2;
        // this.voltageLoad1Ref=this.voltageLoad1 - this.voltageLoad2;
        // this.frequencyLoad1Ref=this.frequencyLoad1 - this.frequencyLoad2;
        // this.pFLoad1Ref=this.pFLoad1 - this.pFLoad2;
        // this.apLoad1Ref=this.apLoad1 - this.apLoad2;
        // this.currentLoad2Ref=this.currentLoad2 - this.currentLoad1;
        // this.voltageLoad2Ref=this.voltageLoad2 - this.voltageLoad1;
        // this.frequencyLoad2Ref=this.frequencyLoad2 - this.frequencyLoad1;
        // this.pFLoad2Ref=this.pFLoad2 - this.pFLoad1;
        // this.apLoad2Ref=this.apLoad2 - this.apLoad1;
        this.loading = false;
        console.log(this.load1);

      },
      (err) => {
        console.log("Test: ", err);

      }
    );
  };

getCompareTime(time){
  this.loading = true;
  this.compareService.getCompareHistoricValues(this.loadId1,this.loadId2,time)
  .subscribe(
    (res) => {
      this.load1 = JSON.parse(JSON.stringify(res)).load1;
      this.load2 = JSON.parse(JSON.stringify(res)).load2;


      this.i1Load1 = (this.load1.i1Load1);
      this.v1Load1 = (this.load1.v1Load1 );
      this.pact1Load1 = (this.load1.pact1Load1);
      this.pF1Load1 = (this.load1.pF1Load1);
      this.papp1Load1 = (this.load1.papp1Load1);
      this.energy1Load1 = (this.load1.energy1Load1);

      this.i1Load2 = (this.load2.i1Load2);
      this.v1Load2 = (this.load2.v1Load2);
      this.pact1Load2 = (this.load2.pact1Load2);
      this.pF1Load2 = (this.load2.pF1Load2 );
      this.papp1Load2 = (this.load2.papp1Load2);
      this.energy1Load2 = (this.load2.energy1Load2);

      this.i2Load1 = (this.load1.i2Load1);
      this.v2Load1 = (this.load1.v2Load1);
      this.pact2Load1 = (this.load1.pact2Load1);
      this.pF2Load1 = (this.load1.pF2Load1);
      this.papp2Load1 = (this.load1.papp2Load1);
      this.energy2Load1 = (this.load1.energy2Load1);

      this.i2Load2 = ( this.load2.i2Load2);
      this.v2Load2 = (this.load2.v2Load2);
      this.pact2Load2 = (this.load2.pact2Load2);
      this.pF2Load2 = (this.load2.pF2Load2);
      this.papp2Load2 = (this.load2.papp2Load2);
      this.energy2Load2 = (this.load2.energy2Load2);

      this.i3Load1 = (this.load1.i3Load1);
      this.v3Load1 = (this.load1.v3Load1);
      this.pact3Load1 = (this.load1.pact3Load1);
      this.pF3Load1 = (this.load1.pF3Load1);
      this.papp3Load1 = (this.load1.papp3Load1);
      this.energy3Load1 = (this.load1.energy3Load1);

      this.i3Load2 = (this.load2.i3Load2);
      this.v3Load2 = (this.load2.v3Load2);
      this.pact3Load2 = (this.load2.pact3Load2);
      this.pF3Load2 = (this.load2.pF3Load2);
      this.papp3Load2 = (this.load2.papp3Load2);
      this.energy3Load2 = (this.load2.energy3Load2);


      this.loadName1 = this.loads.find(el => el.code == this.loadId1).name;
      this.loadName2 = this.loads.find(el => el.code == this.loadId2).name;



      // this.currentLoad1Ref=this.currentLoad1 - this.currentLoad2;
      // this.voltageLoad1Ref=this.voltageLoad1 - this.voltageLoad2;
      // this.frequencyLoad1Ref=this.frequencyLoad1 - this.frequencyLoad2;
      // this.pFLoad1Ref=this.pFLoad1 - this.pFLoad2;
      // this.apLoad1Ref=this.apLoad1 - this.apLoad2;
      // this.currentLoad2Ref=this.currentLoad2 - this.currentLoad1;
      // this.voltageLoad2Ref=this.voltageLoad2 - this.voltageLoad1;
      // this.frequencyLoad2Ref=this.frequencyLoad2 - this.frequencyLoad1;
      // this.pFLoad2Ref=this.pFLoad2 - this.pFLoad1;
      // this.apLoad2Ref=this.apLoad2 - this.apLoad1;
      this.loading = false;
      console.log(this.load1);

    },
    (err) => {
      console.log("Test: ", err);

    }
  );
};
getCompareCharts(){
  this.current.series = [
    {
      name: "C1Load1",
      data: []
    },
    {
      name: "C1Load2",
      data: []
    },
    {
      name: "C2Load1",
      data: []
    },
    {
      name: "C2Load2",
      data: []
    },
    {
      name: "C3Load1",
      data: []
    },
    {
      name: "C3Load2",
      data: []
    },
  ];
  this.voltage.series = [
    {
      name: "V1Load1",
      data: []
    },
    {
      name: "V1Load2",
      data: []
    },
    {
      name: "V2Load1",
      data: []
    },
    {
      name: "V2Load2",
      data: []
    },
    {
      name: "V3Load1",
      data: []
    },
    {
      name: "V3Load2",
      data: []
    },
  ];
  this.frequency.series = [
    {
      name: "Pact1Load1",
      data: []
    },
    {
      name: "Pact1Load2",
      data: []
    },
    {
      name: "Pact2Load1",
      data: []
    },
    {
      name: "Pact2Load2",
      data: []
    },
    {
      name: "Pact3Load1",
      data: []
    },
    {
      name: "Pact3Load2",
      data: []
    },
  ];
  this.pf.series = [
    {
      name: "P1Load1",
      data: []
    },
    {
      name: "P1Load2",
      data: []
    },
    {
      name: "P2Load1",
      data: []
    },
    {
      name: "P2Load2",
      data: []
    },
    {
      name: "P3Load1",
      data: []
    },
    {
      name: "P3Load2",
      data: []
    },
  ];
  this.ap.series = [
    {
      name: "AP1Load1",
      data: []
    },
    {
      name: "AP1Load2",
      data: []
    },
    {
      name: "AP2Load1",
      data: []
    },
    {
      name: "AP2Load2",
      data: []
    },
    {
      name: "AP3Load1",
      data: []
    },
    {
      name: "AP3Load2",
      data: []
    },
  ];
  this.energy.series = [
    {
      name: "Energy1Load1",
      data: []
    },
    {
      name: "Energy1Load2",
      data: []
    },
    {
      name: "Energy2Load1",
      data: []
    },
    {
      name: "Energy2Load2",
      data: []
    },
    {
      name: "Energy3Load1",
      data: []
    },
    {
      name: "Energy3Load2",
      data: []
    },
  ];
  this.current.xaxis.categories = [];
  this.voltage.xaxis.categories = [];
  this.frequency.xaxis.categories = [];
  this.pf.xaxis.categories = [];
  this.ap.xaxis.categories = [];
  this.energy.xaxis.categories = [];
  this.dagta= null;
  this.compareService.getCompareHistoricChart(this.loadId1,this.loadId2,1)
    .subscribe(
      (res) => {
        this.load1Chart = JSON.parse(JSON.stringify(res)).load1;
        this.load2Chart = JSON.parse(JSON.stringify(res)).load2;
        console.log(this.load1Chart.avgAvgI1);
        this.load1Chart.avgAvgI11.forEach(element => {
          this.current.series[0].data.push(element.avgI1);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.avgAvgI12.forEach(element => {
          this.current.series[2].data.push(element.avgI2);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.avgAvgI13.forEach(element => {
          this.current.series[4].data.push(element.avgI3);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });

        this.load1Chart.sumEnergy11.forEach(element => {
          this.energy.series[0].data.push(element.sumEnergy1);
          this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.sumEnergy12.forEach(element => {
          this.energy.series[2].data.push(element.sumEnergy2);
          this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.sumEnergy13.forEach(element => {
          this.energy.series[4].data.push(element.sumEnergy3);
          this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });



        this.load1Chart.avgAvgV11.forEach(element => {
          this.voltage.series[0].data.push(element.avgV1);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load1Chart.avgAvgV12.forEach(element => {
          this.voltage.series[2].data.push(element.avgV2);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load1Chart.avgAvgV13.forEach(element => {
          this.voltage.series[4].data.push(element.avgV3);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load1Chart.avgAvgPact11.forEach(element => {
          this.frequency.series[0].data.push(element.avgPact1);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load1Chart.avgAvgPact12.forEach(element => {
          this.frequency.series[2].data.push(element.avgPact2);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load1Chart.avgAvgPact13.forEach(element => {
          this.frequency.series[4].data.push(element.avgPact3);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load1Chart.avgAvgPF11.forEach(element => {
          this.pf.series[0].data.push(element.avgPF1);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.avgAvgPF12.forEach(element => {
          this.pf.series[2].data.push(element.avgPF2);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.avgAvgPF13.forEach(element => {
          this.pf.series[4].data.push(element.avgPF3);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });

        this.load1Chart.avgAvgPapp11.forEach(element => {
          this.ap.series[0].data.push(element.avgPapp1);
          this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.avgAvgPapp12.forEach(element => {
          this.ap.series[2].data.push(element.avgPapp2);
          this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load1Chart.avgAvgPapp13.forEach(element => {
          this.ap.series[4].data.push(element.avgPapp3);
          this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });


        this.load2Chart.sumEnergy21.forEach(element => {
          this.energy.series[1].data.push(element.sumEnergy1);
          this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.sumEnergy22.forEach(element => {
          this.energy.series[3].data.push(element.sumEnergy2);
          this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.sumEnergy23.forEach(element => {
          this.energy.series[5].data.push(element.sumEnergy3);
          this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });

        this.load2Chart.avgAvgI21.forEach(element => {
          this.current.series[1].data.push(element.avgI1);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.avgAvgI22.forEach(element => {
          this.current.series[3].data.push(element.avgI2);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.avgAvgI23.forEach(element => {
          this.current.series[5].data.push(element.avgI3);
          this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });

        this.load2Chart.avgAvgV21.forEach(element => {
          this.voltage.series[1].data.push(element.avgV1);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load2Chart.avgAvgV22.forEach(element => {
          this.voltage.series[3].data.push(element.avgV2);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load2Chart.avgAvgV23.forEach(element => {
          this.voltage.series[5].data.push(element.avgV3);
          this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load2Chart.avgAvgPact21.forEach(element => {
          this.frequency.series[1].data.push(element.avgPact1);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load2Chart.avgAvgPact22.forEach(element => {
          this.frequency.series[3].data.push(element.avgPact2);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });
        this.load2Chart.avgAvgPact23.forEach(element => {
          this.frequency.series[5].data.push(element.avgPact3);
          this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
        });

        this.load2Chart.avgAvgPF21.forEach(element => {
          this.pf.series[1].data.push(element.avgPF1);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.avgAvgPF22.forEach(element => {
          this.pf.series[3].data.push(element.avgPF2);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.avgAvgPF23.forEach(element => {
          this.pf.series[5].data.push(element.avgPF3);
          this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });

        this.load2Chart.avgAvgPapp21.forEach(element => {
          this.ap.series[1].data.push(element.avgPapp1);
          this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.avgAvgPapp22.forEach(element => {
          this.ap.series[3].data.push(element.avgPapp2);
          this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        this.load2Chart.avgAvgPapp23.forEach(element => {
          this.ap.series[5].data.push(element.avgPapp3);
          this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

        });
        console.log(this.voltage.series[0]);
        this.dagta = this.current.series;
      },
      (err) => {
        console.log("Test: ", err);

      }
    );
}
getCompareChartsTime(time){
  this.current.series = [
    {
      name: "C1Load1",
      data: []
    },
    {
      name: "C1Load2",
      data: []
    },
    {
      name: "C2Load1",
      data: []
    },
    {
      name: "C2Load2",
      data: []
    },
    {
      name: "C3Load1",
      data: []
    },
    {
      name: "C3Load2",
      data: []
    },
  ];
  this.voltage.series = [
    {
      name: "V1Load1",
      data: []
    },
    {
      name: "V1Load2",
      data: []
    },
    {
      name: "V2Load1",
      data: []
    },
    {
      name: "V2Load2",
      data: []
    },
    {
      name: "V3Load1",
      data: []
    },
    {
      name: "V3Load2",
      data: []
    },
  ];
  this.frequency.series = [
    {
      name: "F1Load1",
      data: []
    },
    {
      name: "F1Load2",
      data: []
    },
    {
      name: "F2Load1",
      data: []
    },
    {
      name: "F2Load2",
      data: []
    },
    {
      name: "F3Load1",
      data: []
    },
    {
      name: "F3Load2",
      data: []
    },
  ];
  this.pf.series = [
    {
      name: "P1Load1",
      data: []
    },
    {
      name: "P1Load2",
      data: []
    },
    {
      name: "P2Load1",
      data: []
    },
    {
      name: "P2Load2",
      data: []
    },
    {
      name: "P3Load1",
      data: []
    },
    {
      name: "P3Load2",
      data: []
    },
  ];
  this.ap.series = [
    {
      name: "AP1Load1",
      data: []
    },
    {
      name: "AP1Load2",
      data: []
    },
    {
      name: "AP2Load1",
      data: []
    },
    {
      name: "AP2Load2",
      data: []
    },
    {
      name: "AP3Load1",
      data: []
    },
    {
      name: "AP3Load2",
      data: []
    },
  ];
  this.energy.series = [
    {
      name: "Energy1Load1",
      data: []
    },
    {
      name: "Energy1Load2",
      data: []
    },
    {
      name: "Energy2Load1",
      data: []
    },
    {
      name: "Energy2Load2",
      data: []
    },
    {
      name: "Energy3Load1",
      data: []
    },
    {
      name: "Energy3Load2",
      data: []
    },
  ];
  this.current.xaxis.categories = [];
  this.voltage.xaxis.categories = [];
  this.frequency.xaxis.categories = [];
  this.pf.xaxis.categories = [];
  this.ap.xaxis.categories = [];
  this.energy.xaxis.categories = [];
this.dagta= null;
this.compareService.getCompareHistoricChart(this.loadId1,this.loadId2,time)
.subscribe(
  (res) => {
    this.load1Chart = JSON.parse(JSON.stringify(res)).load1;
    this.load2Chart = JSON.parse(JSON.stringify(res)).load2;
    console.log(this.load1Chart.avgAvgI1);
    this.load1Chart.avgAvgI11.forEach(element => {
      this.current.series[0].data.push(element.avgI1);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.avgAvgI12.forEach(element => {
      this.current.series[2].data.push(element.avgI2);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.avgAvgI13.forEach(element => {
      this.current.series[4].data.push(element.avgI3);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });

    this.load1Chart.sumEnergy11.forEach(element => {
      this.current.series[0].data.push(element.sumEnergy1);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.sumEnergy12.forEach(element => {
      this.current.series[2].data.push(element.sumEnergy2);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.sumEnergy13.forEach(element => {
      this.current.series[4].data.push(element.sumEnergy3);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });



    this.load1Chart.avgAvgV11.forEach(element => {
      this.voltage.series[0].data.push(element.avgV1);
      this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load1Chart.avgAvgV12.forEach(element => {
      this.voltage.series[2].data.push(element.avgV2);
      this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load1Chart.avgAvgV13.forEach(element => {
      this.voltage.series[4].data.push(element.avgV3);
      this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });

    this.load1Chart.avgAvgPact11.forEach(element => {
      this.frequency.series[0].data.push(element.avgPact1);
      this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load1Chart.avgAvgPact12.forEach(element => {
      this.frequency.series[2].data.push(element.avgPact2);
      this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load1Chart.avgAvgPact13.forEach(element => {
      this.frequency.series[4].data.push(element.avgPact3);
      this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });

    this.load1Chart.avgAvgPF11.forEach(element => {
      this.pf.series[0].data.push(element.avgPF1);
      this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.avgAvgPF12.forEach(element => {
      this.pf.series[2].data.push(element.avgPF2);
      this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.avgAvgPF13.forEach(element => {
      this.pf.series[4].data.push(element.avgPF3);
      this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });

    this.load1Chart.avgAvgPapp11.forEach(element => {
      this.ap.series[0].data.push(element.avgPapp1);
      this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.avgAvgPapp12.forEach(element => {
      this.ap.series[2].data.push(element.avgPapp2);
      this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.avgAvgPapp13.forEach(element => {
      this.ap.series[4].data.push(element.avgPapp3);
      this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });


    this.load1Chart.sumEnergy21.forEach(element => {
      this.current.series[1].data.push(element.sumEnergy1);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.sumEnergy22.forEach(element => {
      this.current.series[3].data.push(element.sumEnergy2);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load1Chart.sumEnergy23.forEach(element => {
      this.current.series[5].data.push(element.sumEnergy3);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });

    this.load2Chart.avgAvgI21.forEach(element => {
      this.current.series[1].data.push(element.avgI1);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load2Chart.avgAvgI22.forEach(element => {
      this.current.series[3].data.push(element.avgI2);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load2Chart.avgAvgI23.forEach(element => {
      this.current.series[5].data.push(element.avgI3);
      this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });

    this.load2Chart.avgAvgV21.forEach(element => {
      this.voltage.series[1].data.push(element.avgV1);
      this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load2Chart.avgAvgV22.forEach(element => {
      this.voltage.series[3].data.push(element.avgV2);
      this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load2Chart.avgAvgV23.forEach(element => {
      this.voltage.series[5].data.push(element.avgV3);
      this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });

    this.load2Chart.avgAvgPact21.forEach(element => {
      this.frequency.series[1].data.push(element.avgPact1);
      this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load2Chart.avgAvgPact22.forEach(element => {
      this.frequency.series[3].data.push(element.avgPact2);
      this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });
    this.load2Chart.avgAvgPact23.forEach(element => {
      this.frequency.series[5].data.push(element.avgPact3);
      this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
    });

    this.load2Chart.avgAvgPF21.forEach(element => {
      this.pf.series[1].data.push(element.avgPF1);
      this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load2Chart.avgAvgPF22.forEach(element => {
      this.pf.series[3].data.push(element.avgPF2);
      this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load2Chart.avgAvgPF23.forEach(element => {
      this.pf.series[5].data.push(element.avgPF3);
      this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });

    this.load2Chart.avgAvgPapp21.forEach(element => {
      this.ap.series[1].data.push(element.avgPapp1);
      this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load2Chart.avgAvgPapp22.forEach(element => {
      this.ap.series[3].data.push(element.avgPapp2);
      this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

    });
    this.load2Chart.avgAvgPapp23.forEach(element => {
      this.ap.series[5].data.push(element.avgPapp3);
      this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());

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
