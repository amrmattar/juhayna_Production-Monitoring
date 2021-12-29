import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { IotstatusService } from 'src/services/iotstatus.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexMarkers,
  ApexXAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  markers: ApexMarkers;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-iotstatus',
  templateUrl: './iotstatus.component.html',
  styleUrls: ['./iotstatus.component.css'],
})
export class IotstatusComponent implements OnInit {
  display;
  loads;
  online;
  offline;
  constructor(private service: IotstatusService, public dialog: MatDialog) {
    this.display = 'single';
  }

  openChart(code) {
    let res;

    const dialogRef = this.dialog.open(chartDialog, {
      width: '50%',

      data: code,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnInit(): void {
    this.service.factoryLoads(1).subscribe(
      (res) => {
        this.loads = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.service.LoadStatus().subscribe(
      (res) => {
        this.online = res['online']['online'];
        this.offline = res['offline']['offline'];
        console.log(this.online, this.offline);
      },
      (err) => {
        console.log('res');
        console.log(err);
      }
    );
  }
}
@Component({
  selector: 'chart-dialog',
  templateUrl: 'chart-dialog.html',
})
export class chartDialog implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  obj;
  dat;
  date;
  constructor(
    public dialogRef: MatDialogRef<chartDialog>,
    private service: IotstatusService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.obj = [];
    this.date = [];

    this.chartOptions = {
      series: [
        {
          name: 'load status',
          data: [],
        },
      ],
      chart: {
        type: 'line',
        height: 350,
      },
      stroke: {
        curve: 'stepline',
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Stepline Chart',
        align: 'left',
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      xaxis: {
        categories: [],
      },
    };
  }
  ngOnInit() {
    this.service.DeviceActivity(this.data, 1).subscribe((resp) => {
      this.dat = resp;
      console.log(this.dat);
      this.dat['statuses'].forEach((element) => {
        // if (element['status'] == 1) {
        this.obj.push(element['status']);
        this.date.push(element['timeStamp']);
        // } else if (element['status'] == 0) {
        //   // console.log('this.obj[1]');

        //   this.obj[1]['y'].push(element['timeStamp']);
        // }
      });
      this.chartOptions.series[0].data = this.obj;
      this.chartOptions.xaxis.categories = this.date;
      console.log(this.dat);
    });
  }

  datechange($event) {
    console.log($event);

    if ($event.value === 'today') {
      this.service.DeviceActivity(this.data, 1).subscribe((resp) => {
        this.dat = resp;
        console.log(this.obj[0]);
        this.dat['statuses'].forEach((element) => {
          // if (element['status'] == 1) {
          this.obj.push(element['status']);
          this.date.push(element['timeStamp']);

          // } else if (element['status'] == 0) {
          //   // console.log('this.obj[1]');

          //   this.obj[1]['y'].push(element['timeStamp']);
          // }
        });
        this.chartOptions.series[0].data = this.obj;
        this.chartOptions.xaxis.categories = this.date;

        console.log(this.dat);
      });
    } else if ($event.value === 'yesterday') {
      this.service.DeviceActivity(this.data, 2).subscribe((resp) => {
        this.dat = resp;
        console.log(this.obj[0]);
        this.dat['statuses'].forEach((element) => {
          // if (element['status'] == 1) {
          this.obj.push(element['status']);
          // } else if (element['status'] == 0) {
          //   // console.log('this.obj[1]');

          //   this.obj[1]['y'].push(element['timeStamp']);
          // }
        });
        this.chartOptions.series[0].data = this.obj;
        console.log(this.dat);
      });
    } else if ($event.value === 'lastweek') {
      console.log('last week');

      this.service.DeviceActivity(this.data, 3).subscribe((resp) => {
        this.dat = resp;
        console.log(this.obj[0]);
        this.dat['statuses'].forEach((element) => {
          // if (element['status'] == 1) {
          this.obj.push(element['status']);
          // } else if (element['status'] == 0) {
          //   // console.log('this.obj[1]');

          //   this.obj[1]['y'].push(element['timeStamp']);
          // }
        });
        this.chartOptions.series[0].data = this.obj;
        console.log(this.dat);
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
