import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';



import { Image } from './image.model';

declare var API_URL: string;

@Injectable()
export class ImageService {
    private imagesUrl = API_URL + "api/image";
    private articles: Image[] = [];

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
        // console.log(API_URL);
    }

    getImages(): Observable<Image[]> {
        return this.http.get(this.imagesUrl, this.options).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    createImage(item: any): Observable<any> {
        let subject: Observable<Image>;
        return item.upload().Response.map(result => result.json().data || {})
            .catch(this.handleError);
    }

    deleteImage(image: Image): Observable<any> {
        return this.http.delete(this.imagesUrl + '/' + image.id, this.jwt()).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
            headers.append('Content-Type', 'application/json');
            return new RequestOptions({ headers: headers });
        }
    }
}