import { Component, OnInit } from '@angular/core';
import { MachinelistService } from 'src/services/machinelist.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-machinelist',
  templateUrl: './machinelist.component.html',
  styleUrls: ['./machinelist.component.css'],
})
export class MachinelistComponent implements OnInit {
  selectedfactname;
  selectedloadname;
  selectedfeatname;
  featureName: boolean;
  factories;
  functions;
  features;
  request;
  alldata;
  searchfilter2;
  public canvasWidth = 140;
  public needleValue = 65;
  public centralLabel = '';
  public name = 'Average Power factor';
  public bottomLabel = 'Energy Consumption 65 kw';
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
  };
  data;

  constructor(private service: MachinelistService) {}
  minValue: number = 50;
  maxValue: number = 200;
  options2: Options = {
    floor: 0,
    ceil: 250,
  };
  ngOnInit(): void {
    this.service.getenergy().subscribe((res) => {
      this.data = res;
      this.alldata = res;
    });
    this.request = setInterval(() => {
      console.log('intr');

      this.service.getenergy().subscribe((res) => {
        this.data = res;
        this.alldata = res;
        this.searchfilter(this.searchfilter2);
      });
      console.log(this.searchfilter2);
    }, 30000);
  }
  datechange(e) {}
  mathS()
  {
    return Math.sqrt(3);
  }
  onChangeEvent($event) {}
  ngOnDestroy() {
    if (this.request) {
      clearInterval(this.request);
    }
  }
  searchfilter(e) {
    console.log(typeof e);
    if (typeof e == 'object') {
      this.searchfilter2 = e.target.value;
      if (e.target.value.length > 0) {
        this.data = this.data.filter((x) =>
          x.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
      } else {
        this.data = this.alldata;
      }
    } else if (typeof e == 'string') {
      if (e.length > 0) {
        this.data = this.data.filter((x) =>
          x.name.toLowerCase().includes(e.toLowerCase())
        );
      } else {
        this.data = this.alldata;
      }
      return this.data;
    }
  }
  getTime(time){
    return new Date(time).toLocaleString();
  }
}
