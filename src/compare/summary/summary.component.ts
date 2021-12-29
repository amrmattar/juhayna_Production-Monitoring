import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompareService } from "../../app/services/compare.service";
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { element } from 'protractor';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
loads:any;
sources:any;
allLoads:any;
mF1=[];
mF2=[];
md1=[];
md2=[];
md3=[];
pricingValues=null;
tableChange=null;
From;
  To;
  loadCode:any;
  dateControl = new FormControl('');
  dateControl2 = new FormControl('');
exportAsConfig2: ExportAsConfig = {
  type: 'csv', // the type you want to download
  elementIdOrContent:'myTableElementId' // the id of html/table element
}
  constructor(private compareService: CompareService,
    private http: HttpClient,private exportAsService: ExportAsService) { }

  ngOnInit(): void {
    this.getReadsYesterday()
    this.getPricing();
  }
  getPricing(){
    this.compareService.GetPricing()
  .subscribe(
    (res) => {
      this.pricingValues = JSON.parse(JSON.stringify(res));
      console.log(this.pricingValues);
    }
  );
  }
  getReadsYesterday()
{
  this.tableChange = null;
  this.mF1 = [];
  this.mF2 = [];
  this.md1 = [];
  this.md2 = [];
  this.md3 = [];
  this.loads = [];
  this.sources =[];
  this.allLoads = [];
  this.compareService.GetAllLoadsYesterday()
  .subscribe(
    (res) => {
      this.loads = JSON.parse(JSON.stringify(res)).loads;
      this.sources = JSON.parse(JSON.stringify(res)).sources;
      this.allLoads = JSON.parse(JSON.stringify(res)).allLoads;
      this.tableChange = this.loads;
      this.sources.forEach(element => {
        if(element.name == 'MDB 1 INC1' ||  element.name == 'MDB 1 INC2' || element.name == 'MBD 2 INC ' || element.name == 'Switch Gear INC 1')
        {

          this.mF1.push(element);

        }
        else if(element.name == 'MDB 3 INC1' || element.name == 'Switch Gear INC 2')
        {
          this.mF2.push(element);
        }

      });
      this.loads.forEach(element => {
        if(element.areaName == 'MDB1' )
        {

          this.md1.push(element);

        }
        else if(element.areaName == 'MDB2')
        {
          this.md2.push(element);
        }
        else if(element.areaName == 'MDB3')
        {
          this.md3.push(element);
        }

      });
      console.log(this.mF1);
      console.log(this.mF2);

    }
  );
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
  this.tableChange = null;
  this.mF1 = [];
  this.mF2 = [];
  this.md1 = [];
  this.md2 = [];
  this.md3 = [];
  this.loads = [];
  this.sources =[];
  this.allLoads = [];
  this.compareService.GetAllLoadsPeriod(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1)).subscribe((res) => {

    this.loads = res["loads"];
    this.sources = res["sources"];
    this.tableChange = this.loads;
    this.allLoads = JSON.parse(JSON.stringify(res)).allLoads;
    console.log(this.loads);
    this.sources.forEach(element => {
      if(element.name == 'MDB 1 INC1' ||  element.name == 'MDB 1 INC2' || element.name == 'MBD 2 INC ' || element.name == 'Switch Gear INC 1')
        {

          this.mF1.push(element);

        }
        else if(element.name == 'MDB 3 INC1' || element.name == 'Switch Gear INC 2')
        {
          this.mF2.push(element);
        }

    });
    this.loads.forEach(element => {
      if(element.areaName == 'MDB1' )
      {

        this.md1.push(element);

      }
      else if(element.areaName == 'MDB2')
      {
        this.md2.push(element);
      }
      else if(element.areaName == 'MDB3')
      {
        this.md3.push(element);
      }

    });
  });
  }

  pricing(energy)
  {
    if(this.pricingValues != null)
    {
      // this.pricingValues[0].forEach(element => {

        if(energy >= this.pricingValues[0].min && energy <= this.pricingValues[0].max)
        {
          return (energy*this.pricingValues[0].pricing).toFixed(2)
        }
        else if(energy >= this.pricingValues[1].min && energy <= this.pricingValues[1].max)
        {
          return (energy*this.pricingValues[1].pricing).toFixed(2)
        }
        else if(energy >= this.pricingValues[2].min && energy <= this.pricingValues[2].max)
        {
          return (energy*this.pricingValues[2].pricing).toFixed(2)
        }
        else if(energy >= this.pricingValues[3].min && energy <= this.pricingValues[3].max)
        {
          return (energy*this.pricingValues[3].pricing).toFixed(2)
        }
        else if(energy >= this.pricingValues[4].min && energy <= this.pricingValues[4].max)
        {
          return (energy*this.pricingValues[4].pricing).toFixed(2)
        }
      // });
    //   if(energy >=0 && energy <= 100)
    // {
    //   return (energy*0.65).toFixed(2)
    // }
    // else if(energy >=101 && energy <= 250)
    // {
    //   return(energy*1.2).toFixed(2)
    // }
    // else if(energy >=251 && energy <= 600)
    // {
    //   return(energy*1.4).toFixed(2)
    // }
    // else if(energy >=601 && energy <= 1000)
    // {
    //   return (energy*1.55).toFixed(2)
    // }
    // else if(energy >=1000)
    // {
    //   return(energy*1.6).toFixed(2)
    // }
    }


  }

}
