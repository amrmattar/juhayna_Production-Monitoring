import { Component, OnInit } from '@angular/core';
import { MachinelistService } from 'src/services/machinelist.service';
import { Options } from '@angular-slider/ngx-slider';
import { FormGroup, FormControl } from '@angular/forms';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { CompareService } from '../services/compare.service';
interface FoodNode {
  name: string;
  children?: FoodNode[];
  img:string;
  id:number;
  code:string;
}
const TREE_DATA: FoodNode[] = [

];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  img:string;
  level: number;
  id:number;
  code:string;
}
@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})



export class SummaryReportComponent implements OnInit {
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
  From;
  To;
  loadCode:any;
  dateControl = new FormControl('');
  dateControl2 = new FormControl('');
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
  constructor(private service: MachinelistService,private compareService: CompareService,) {}
  minValue: number = 50;
  maxValue: number = 200;
  options2: Options = {
    floor: 0,
    ceil: 250,
  };
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
    this.service.getenergy2(this.loadCode,new Date().toDateString(),new Date().toDateString()).subscribe((res) => {
      this.data = res;
      this.alldata = res;
    });
    this.request = setInterval(() => {
      console.log('intr');

      this.service.getenergy2(this.loadCode,new Date().toDateString(),new Date().toDateString()).subscribe((res) => {
        this.data = res;
        this.alldata = res;
      });
    }, 15000);
    this.getHierarchy();

  }
  datechange(e) {}
  onChangeEvent($event) {}
  ngOnDestroy() {
    if (this.request) {
      clearInterval(this.request);
    }
  }
  getHierarchy(){
    const TREE_DATA: FoodNode[] = [

    ];
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
  this.service.getenergy2(this.loadCode,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1)).subscribe((res) => {
    clearInterval(this.request);
    this.data = res;
    this.alldata = res;
  });
  }
}
