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
export class EnergyService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    //Constructor
    constructor(private http: HttpClient) { }

    getEnergyByFactory(factory,time) {
        return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeFactory/' +factory+"/"+time);
    }
    getEnergyByFunction(funct,time) {
      return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeFunction/' +funct+"/"+time);
  }
    getEnergyByArea(funct,time) {
      return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeArea/' +funct+"/"+time);
  }
    getEnergyByFunctions(time) {
      return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeFunction/'+time);
  }
    getEnergyByAreas(time) {
      return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeArea/'+time);
  }
  GetAllLoadsYesterday() {
    return this.http.get(environment.servicesUrl + '/Tree/GetAllLoadsYesterday');
}
    getEnergyByLoads(time) {
      return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeLoad/'+time);
  }
    getEnergyByLoad(load,time) {
      return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyTimeLoad/'+load+"/"+time);
  }
  getEnergyByFactoryDate(factory,start,end) {
    return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyDateFactory/' +factory+"/"+start+"/"+end);
}
getEnergyByFunctionDate(funct,start,end) {
  return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyDateFunction/' +funct+"/"+start+"/"+end);
}
getEnergyByFunctionsDate(start,end) {
  return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyDateFunction/'+start+"/"+end);
}
getEnergyByLoadsDate(start,end) {
  return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyDateLoad/'+start+"/"+end);
}
getEnergyByLoadDate(load,start,end) {
  return this.http.get(environment.servicesUrl + '/NewEnergyReports/EnergyDateLoad/'+load+"/"+start+"/"+end);
}

    /*--------------------------HttpErrorHandler----------------------- */
    errorHandler(error: HttpErrorResponse) {
        console.log(error);
        return Observable.throw(error.status || "Server Error");
    }
    /*--------------------------HttpErrorHandler----------------------- */
}
