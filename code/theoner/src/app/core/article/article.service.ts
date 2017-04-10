import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';



import { Article } from './article.model';

declare var API_URL: string;

@Injectable()
export class ArticleService {
    private articlesUrl = API_URL + "article";
    private articles: Article[] = [];

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
        console.log(API_URL);
    }



    getArticles(type: string): Observable<Article[]> {
        return this.http.get(this.articlesUrl)
            .map(result => result.json().data.filter(data => data.type == type) || {})
            .catch(this.handleError);
    }

    createArticle(article: Article): Observable<Article> {
        return this.http.post(this.articlesUrl, JSON.stringify({
            data: [{
                title: article.title,
                content: article.content,
                type: article.type,
                author: "theoner"
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