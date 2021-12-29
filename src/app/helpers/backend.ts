import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import axios from 'axios'

import { User } from '../../app/models/user';


@Injectable()
export class backendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url = "http://10.7.200.160/reportsscheduler/api/login", method='POST', headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return <any> of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())

        function handleRoute() {
            switch (true) {
                case url.endsWith('/login') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions
        function customRequest(data) {
          return axios(data)
      }
         async function authenticate() {
            const { email, password } = body;
            const requestData = {
              method: 'post',
              url: "http://10.7.200.160/reportsscheduler/api/login",
              data: {
                  email: email,
                  password: password
              }
          }

           const res = await customRequest(requestData);
           console.log(res.data);
           console.log(requestData);
           localStorage.setItem('currentUser', JSON.stringify(res.data.accessTokenResource.accessToken));
            // const user = users.find(x => x.email === res.data.userCredentials.email && x.password === res.data.userCredentials.password);
            // if (!user) return error('Email or password is incorrect');
            return res
        }

        // function getUsers() {
        //     if (!isLoggedIn()) return unauthorized();
        //     return ok(users);
        // }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer jwt-token';
        }
    }
}

export let backendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: backendInterceptor,
    multi: true
};
