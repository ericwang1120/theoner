import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Article } from './article.model';
import { Image } from '../image/image.model';


declare const API_URL: string;
declare const ENV;

@Injectable()
export class ArticleService {
    private articlesUrl = API_URL + "api/article";
    private articles: Article[] = [];

    constructor(private http: Http) {
    }

    getArticles(type: string): Observable<Article[]> {
        return this.http.get(this.articlesUrl)
            .map(result => result.json().data.filter(data => type == 'all' ? true : data.type == type) || {})
            .catch(this.handleError);
    }

    createArticle(article: Article): Observable<Article> {
        let data = [{
            title: article.title,
            content: article.content,
            type: article.type,
            author: "eric",
            image_path_left: article.image_path_left,
            image_path_right: article.image_path_right,
        }];

        return this.http.post(this.articlesUrl, JSON.stringify({
            data:data
        }), this.jwt()).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    deleteArticle(article: Article): Observable<any> {
        //api of free web server
        if (ENV == "development") {
            return this.http.post(this.articlesUrl + '/' + article.id + "/delete", null, this.jwt()).map(result => result.json().data || {})
                .catch(this.handleError);
        }
        return this.http.delete(this.articlesUrl + '/' + article.id, this.jwt()).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    updateArticle(article: Article): Observable<Article> {
        let data = [{
            title: article.title,
            content: article.content,
            type: article.type,
            author: "eric",
            image_path_left: article.image_path_left,
            image_path_right: article.image_path_right,
        }];
        //api of free web server
        if (ENV == "development") {
            return this.http.post(this.articlesUrl + '/' + article.id, JSON.stringify({
                data: data
            }), this.jwt()).map(result => result.json().data || {})
                .catch(this.handleError);
        }
        return this.http.put(this.articlesUrl + '/' + article.id, JSON.stringify({
            data: data
        }), this.jwt()).map(result => result.json().data || {})
            .catch(this.handleError);
    }

    getImages(article: Article): Observable<Image[]> {
        let images = this.http.get(this.articlesUrl + '/' + article.id + '/image')
            .map(result => result.json().data || {});
        return images.catch(this.handleError);

    }

    // uploadImages(article: Article, imageData: FormData) {
    //     let headers = new Headers();
    //     headers.append('Accept', 'application/json');

    //     let options = new RequestOptions({ headers: headers });
    //     this.http.post(this.articlesUrl + '/' + article.id + '/image', imageData, this.jwt())
    //         .map(res => res.json())
    //         .catch(error => Observable.throw(error))
    //         .subscribe(
    //         data => console.log(data),
    //         error => console.log(error)
    //         )
    // }

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