import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

declare var API_URL: string;
declare var localStorage;

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    login(username: string, password: string) {
        return this.http.post(API_URL+'oauth/token',
            JSON.stringify({
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "6rqnugxGilQcsHU6GtZC7KEJw1K2gsgxKyH3aqE2",
                username: username,
                password: password,
                "scope": ""
            }), this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    console.log(user);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}