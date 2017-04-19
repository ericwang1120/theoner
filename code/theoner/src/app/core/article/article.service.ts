import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';



import { Article } from './article.model';
import { Image } from '../image/image.model';


declare var API_URL: string;

@Injectable()
export class ArticleService {
    private articlesUrl = API_URL + "api/article";
    private articles: Article[] = [];

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
        console.log(API_URL);
    }



    getArticles(type: string): Observable<Article[]> {
        return this.http.get(this.articlesUrl)
            .map(result => result.json().data.filter(data => type == 'all' ? true : data.type == type) || {})
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

    deleteArticle(article: Article): Observable<any> {
        return this.http.delete(this.articlesUrl + '/' + article.id, this.options).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    updateArticle(article: Article): Observable<Article> {
        return this.http.put(this.articlesUrl + '/' + article.id, JSON.stringify({
            data: [{
                title: article.title,
                content: article.content,
                type: article.type,
                author: "theoner"
            }]
        }), this.options).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    getImages(article: Article): Observable<Image[]> {
        let images = this.http.get(this.articlesUrl + '/' + article.id + '/image')
            .map(result => result.json().data || {});
        return images.catch(this.handleError);

    }

    uploadImages(article: Article, event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            formData.append('displayType', '11');
            let headers = new Headers();
            headers.append('Accept', 'application/json');

            let options = new RequestOptions({ headers: headers });
            this.http.post(this.articlesUrl + '/' + article.id + '/image', formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                data => console.log(data),
                error => console.log(error)
                )
        }
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