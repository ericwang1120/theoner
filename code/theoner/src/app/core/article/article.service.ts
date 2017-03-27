import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';



import { Article } from './article.model';

@Injectable()
export class ArticleService {
    private articlesUrl = "assets/articles.json";
    private articles: Article[] = [];


    constructor(private http: Http) {

    }



    getArticles(type:string): Observable<Article[]> {
        return this.http.get(this.articlesUrl)
            .map(result=>result.json().data.filter(data => data.type == type)||{})
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