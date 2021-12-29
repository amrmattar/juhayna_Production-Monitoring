import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AlertthresholdService {
  constructor(private http: HttpClient) {}

  getalerts() {
    return this.http
      .get(environment.sourceURL + '/AlertReads')
      .pipe(catchError(this.handleError));
  }

  addAlert(alert) {
    return this.http
      .post(environment.sourceURL + '/Alerts', alert)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.status || 'Server Error');
  }
}
