import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../../app/models/user';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,private router: Router) {

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('jwt-token')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(email: string, password: string){
        return this.http.post(`${environment.servicesUrl}/login`, { email, password }, httpOptions)
        {
          this.router.navigate(['/en/ene2']);
        }

    }
    register( email: string, password: string): Observable<any> {
      return this.http.post(`${environment.servicesUrl}/ApplicationUsers`, { email, password }, httpOptions);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
