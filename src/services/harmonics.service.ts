import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HarmonicsService {
  constructor(private http: HttpClient) {}

  getTHDLoad(load,time)
  {
    return this.http.get(environment.servicesUrl + '/ActivePower/GetHarmonics/' +load+"/"+time);
  }
  getTHDFunctions(time)
  {
    return this.http.get(environment.servicesUrl + '/ActivePower/GetFunctionHarmonics/'+time);
  }
  getTHDFunction(id,time)
  {
    return this.http.get(environment.servicesUrl + '/ActivePower/GetFunctionHarmonics/'+id+"/"+time);
  }
  getTHDArea(id,time)
  {
    return this.http.get(environment.servicesUrl + '/ActivePower/GetAreaHarmonics/'+id+"/"+time);
  }

  getthdfactory(factId, time) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdfactory', {
        params: { factId, date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getthdfactoryfromto(factId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdfactoryfrom', {
        params: { factId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }

  getMaxAndMin(factId, time) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/maxminthdfactory', {
        params: { factId, date: time },
      })
      .pipe(catchError(this.handleError));
  }
  getMaxAndMinfromto(factId, fromdate, todate) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/maxminthdfactoryfrom', {
        params: { factId, fromdate, todate },
      })
      .pipe(catchError(this.handleError));
  }
  thdDistribution(factId, time, featureId) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdDistPerFeature', {
        params: { factId, date: time, featureId },
      })
      .pipe(catchError(this.handleError));
  }
  thdDistributionfromto(factId, fromdate, todate, featureId) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdDistPerFeaturefrom', {
        params: { factId, fromdate, todate, featureId },
      })
      .pipe(catchError(this.handleError));
  }
  thdDistributionFunc(factId, time, featureId) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdDistPerFunction', {
        params: { factId, date: time, featureId },
      })
      .pipe(catchError(this.handleError));
  }
  thdDistributionFuncfromto(factId, fromdate, todate, featureId) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdDistPerFunctionfrom', {
        params: { factId, fromdate, todate, featureId },
      })
      .pipe(catchError(this.handleError));
  }
  thdloadDistribution(time, loadid) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdforload', {
        params: { date: time, loadid },
      })
      .pipe(catchError(this.handleError));
  }
  thdloadDistributionfromto(fromdate, todate, loadid) {
    return this.http
      .get(environment.sourceURL + '/Harmonics/thdforloadfrom', {
        params: { fromdate, todate, loadid },
      })
      .pipe(catchError(this.handleError));
  }
  getFeatures() {
    return this.http
      .get(environment.sourceURL + '/Functions')
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
  getFunctionsfunctions() {
    return this.http
      .get(environment.sourceURL + '/functions')
      .pipe(catchError(this.handleError));
  }
  getAreas() {
    return this.http
      .get(environment.sourceURL + '/Areas')
      .pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.status || 'Server Error');
  }
}
