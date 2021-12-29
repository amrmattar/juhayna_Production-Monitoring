import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MachinelistService {
  constructor(private http: HttpClient) {}

  getenergy() {
    return this.http
      .get(environment.sourceURL + '/NewEnergyReports/LoadEnergy')
      .pipe(catchError(this.handleError));
  }
  getenergy2(load,from,to) {
    return this.http
      .get(environment.sourceURL + '/NewEnergyReports/CalibrationModule/'+load+'/'+from+'/'+to)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.status || 'Server Error');
  }
}
