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
export class CompareService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    //Constructor
    constructor(private http: HttpClient) { }

    getCompareValues(load1,load2) {
        return this.http.get(environment.servicesUrl + '/TransientReadings/CompareLoadsPhase/' +load1+"/"+load2);
    }
    getCompareChart(load1,load2,time) {
        return this.http.get(environment.servicesUrl + '/NewPowerReports/CompareLoads/' +load1+"/"+load2+"/"+time);
    }
    getCompareHistoricValues(load1,load2,time) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/CompareLoadsPhase/' +load1+"/"+load2+"/"+time);
  }
  getCompareHistoricChart(load1,load2,time) {
      return this.http.get(environment.servicesUrl + '/NewPowerReports/CompareLoads/' +load1+"/"+load2+"/"+time);
  }
  getHierarchy(factory) {
      return this.http.get(environment.servicesUrl + '/Tree/Hierarchy/' +factory);
  }
  getHierarchyArea(factory) {
    return this.http.get(environment.servicesUrl + '/Tree/HierarchyArea/' +factory);
}
getHierarchySources(factory) {
  return this.http.get(environment.servicesUrl + '/Tree/HierarchySources/' +factory);
}
  getReport(Load,Option,Duration,Resolution ) {
    return this.http.get(environment.servicesUrl + '/Tree/ValueOfTree/' +Load+'/'+Option+'/'+Duration+'/'+Resolution);
}
  getReportDate(Load,Option,From,To,Resolution ) {
    return this.http.get(environment.servicesUrl + '/Tree/ValueOfTree/' +Load+'/'+Option+'/'+From+'/'+To+'/'+Resolution);
}
  postReport(body) {
    return this.http.post(environment.servicesUrl + '/Tree/DefinedReport',body);
}
getReports() {
    return this.http.get(environment.servicesUrl + '/Tree/DefinedReport');
}
GetAllLoadsYesterday() {
  return this.http.get(environment.servicesUrl + '/Tree/GetAllLoadsYesterday');
}
GetPricing() {
  return this.http.get(environment.servicesUrl + '/Pricing');
}
GetAllLoadsPeriod(from,to) {
  return this.http.get(environment.servicesUrl + '/Tree/GetAllLoadsPeriod/'+from+'/'+to);
}

    /*--------------------------HttpErrorHandler----------------------- */
    errorHandler(error: HttpErrorResponse) {
        console.log(error);
        return Observable.throw(error.status || "Server Error");
    }
    /*--------------------------HttpErrorHandler----------------------- */
}
