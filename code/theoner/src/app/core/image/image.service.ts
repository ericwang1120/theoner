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
        console.log(API_URL);
    }

    deleteImage(image: Image): Observable<any> {
        return this.http.delete(this.imagesUrl + '/' + image.id, this.options).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    updateImage(image: Image): Observable<Image> {
        return this.http.put(this.imagesUrl + '/' + image.id, JSON.stringify({
            data: [{
                store_path: image.store_path,
                display_type: image.display_type,
                article_id: image.article_id,
            }]
        }), this.options).map(result => result.json().data || {})
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
}