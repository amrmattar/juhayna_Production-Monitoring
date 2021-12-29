import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class IotstatusService {
  constructor(private http: HttpClient) {}

  factoryLoads(id) {
    return this.http
      .get(environment.sourceURL + '/Loads/GetLoadsFactory/' + id)
      .pipe(catchError(this.handleError));
  }
  LoadStatus() {
    return this.http
      .get(environment.sourceURL + '/Dashboard/DeviceStatus')
      .pipe(catchError(this.handleError));
  }
  DeviceActivity(code, time) {
    return this.http
      .get(
        environment.sourceURL +
          '/Dashboard/DeviceTimeActivity/' +
          code +
          '/' +
          time
      )
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.status || 'Server Error');
  }
}
