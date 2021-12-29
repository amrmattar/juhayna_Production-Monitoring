import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  newFactory(name, location, description) {
    return this.http
      .post(environment.sourceURL + '/Factories', {
        name,
        location,
        description,
      })
      .pipe(catchError(this.handleError));
  }
  editFactory(id, data) {
    return this.http
      .put(environment.sourceURL + '/Factories/' + id, data)
      .pipe(catchError(this.handleError));
  }

  deleteFactory(id) {
    return this.http
      .delete(environment.sourceURL + '/Factories/' + id)
      .pipe(catchError(this.handleError));
  }

  newFunction(name, description,factoryId) {
    return this.http
      .post(environment.sourceURL + '/Functions', {
        name,
        description,
        factoryId
      })
      .pipe(catchError(this.handleError));
  }
  newArea(name, description,factoryId) {
    return this.http
      .post(environment.sourceURL + '/Areas', {
        name,
        description,
        factoryId
      })
      .pipe(catchError(this.handleError));
  }

  editFunction(id, func) {
    return this.http
      .put(environment.sourceURL + '/Functions/' + id, func)
      .pipe(catchError(this.handleError));
  }
  editArea(id, func) {
    return this.http
      .put(environment.sourceURL + '/Areas/' + id, func)
      .pipe(catchError(this.handleError));
  }

  newLoad(load) {
    return this.http
      .post(environment.sourceURL + '/Loads', load)
      .pipe(catchError(this.handleError));
  }
  editLoad(id, load) {
    return this.http
      .put(environment.sourceURL + '/Loads/' + id, load)
      .pipe(catchError(this.handleError));
  }

  deleteFunction(id) {
    return this.http
      .delete(environment.sourceURL + '/Functions/' + id)
      .pipe(catchError(this.handleError));
  }
  deleteLoad(id) {
    return this.http
      .delete(environment.sourceURL + '/Loads/' + id)
      .pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.status || 'Server Error');
  }
}
