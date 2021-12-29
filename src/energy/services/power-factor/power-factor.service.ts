import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import "rxjs/Rx";
import { environment } from "src/environments/environment.prod";
import {
  HttpErrorResponse,
  HttpHeaders,
  HttpClient,
  HttpParams,
} from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class PFService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    //Constructor
    constructor(private http: HttpClient) { }

    // getEnergyByFactory(factory,time) {
    //     return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeFactory/' +factory+"/"+time);
    // }
    getEnergyByFunction(funct,time) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/FunctionDailyCharts/' +funct+"/"+time);
  }
    getEnergyByFunctions(time) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/FunctionDailyCharts/'+time);
  }

  getEnergyByArea(funct,time) {
    return this.http.get(environment.servicesUrl + '/NewPowerReports/AreaDailyCharts/' +funct+"/"+time);
}
  getEnergyByAreas(time) {
    return this.http.get(environment.servicesUrl + '/NewPowerReports/AreaDailyCharts/'+time);
}
    getEnergyByLoads(time) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/PFTimeLoad/'+time);
  }
    getEnergyByLoad(load,time) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/LoadChart/'+load+"/"+time);
  }
    getEnergyByFunctionDate(funct,start,end) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/FunctionDateCharts/' +funct+"/"+start+"/"+end);
  }
    getEnergyByFunctionsDate(start,end) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/FunctionDateCharts/'+start+"/"+end);
  }
    getEnergyByLoadsDate(start,end) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/PFDateLoad/'+start+"/"+end);
  }
    getEnergyByLoadDate(load,start,end) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/LoadDateChart/'+load+"/"+start+"/"+end);
  }

    /*--------------------------HttpErrorHandler----------------------- */
    errorHandler(error: HttpErrorResponse) {
        console.log(error);
        return Observable.throw(error.status || "Server Error");
    }
    /*--------------------------HttpErrorHandler----------------------- */
}
