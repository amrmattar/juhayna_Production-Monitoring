import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivepowerService {
  constructor(private http: HttpClient) {}
  getEnergyByFunction(funct,time) {
    return this.http.get(environment.servicesUrl + '/ActivePower/GetActiveFunction/' +funct+"/"+time);
}
  getEnergyByFunctions(time) {
    return this.http.get(environment.servicesUrl + '/ActivePower/GetActiveFunctions/'+time);
}
getEnergyByArea(funct,time) {
  return this.http.get(environment.servicesUrl + '/ActivePower/GetActiveArea/' +funct+"/"+time);
}
getEnergyByAreas(time) {
  return this.http.get(environment.servicesUrl + '/ActivePower/GetActiveAreas/'+time);
}
getEnergyByLoad(funct,time) {
  return this.http.get(environment.servicesUrl + '/ActivePower/GetActiveLoad/' +funct+"/"+time);
}
getEnergyByLoads(time) {
  return this.http.get(environment.servicesUrl + '/ActivePower/GetActiveLoads/'+time);
}

  getloads() {
    return this.http
      .get(environment.sourceURL + '/ActivePower/loadnames')
      .pipe(catchError(this.handleError));
  }
  getfuctions() {
    return this.http
      .get(environment.sourceURL + '/ActivePower/funcnames')
      .pipe(catchError(this.handleError));
  }

  getActivepower(factId, time) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/activepwr', {
        params: { factId, date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getActivepowerfromto(factId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/activepwrfromto', {
        params: { factId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }

  getthdfactory(factId, time) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/thdfactory', {
        params: { factId, date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getthdfactoryfromto(factId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/thdfactoryfromto', {
        params: { factId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }

  getApparentPower(factId, time) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/functionapparent', {
        params: { factId, date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getApparentPowerfromto(factId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/functionapparentfromto', {
        params: { factId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }
  getActivePower(factId, time) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/functionactive', {
        params: { factId, date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getActivePowerfromto(factId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/functionactivefromto', {
        params: { factId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }
  getReActivePower(factId, time) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/functionreactive', {
        params: { factId, date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getReActivePowerfromto(factId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/functionreactivefromto', {
        params: { factId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }

  getfactEnergyDistPerFeature(time, featureId) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/EnergyDistPerFeature', {
        params: { date: time, loadid: featureId },
      })
      .pipe(catchError(this.handleError));
  }
  getfactEnergyDistPerallloads(time) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/EnergyDistPerLoads', {
        params: { date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getfactEnergyDistPerallloadsfromto(fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/EnergyDistPerLoadsfrom', {
        params: { fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }
  getfactEnergyDistPerFeaturefromto(featureId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/EnergyDistPerFeaturefromto', {
        params: { loadid: featureId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }
  getfactEnergyDistPerFeature2(time, featureId) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/EnergyDistPerFunction', {
        params: { date: time, functionId: featureId },
      })
      .pipe(catchError(this.handleError));
  }
  getfactEnergyDistPerFeature2fromto(featureId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/ActivePower/EnergyDistPerFunctionfromto', {
        params: { functionId: featureId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }
  getFactories() {
    return this.http
      .get(environment.sourceURL + '/factories')
      .pipe(catchError(this.handleError));
  }
  getFunctions() {
    return this.http
      .get(environment.sourceURL + '/Loads')
      .pipe(catchError(this.handleError));
  }
  getFeatures() {
    return this.http
      .get(environment.sourceURL + '/Functions')
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.status || 'Server Error');
  }
}
