import { Component } from '@angular/core'
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../../core/article'
import { Image, ImageService } from '../../core/image'

declare const API_URL:string;

@Component({
    moduleId: module.id,
    selector: 'article-form',
    templateUrl: 'article-form.component.html',
    styleUrls: ['article-form.component.css'],
})

export class ArticleFormComponent implements OnInit {
    articles: Article[];
    selectedArticle: Article;
    selectedImages: Image[];
    storagePath=API_URL+'storage/';
    errorMessage: String;

    constructor(
        private articleService: ArticleService,
        private imageService: ImageService) {
    }

    ngOnInit(): void {
        this.getArticles('article');
    }

    getArticles(type: string): void {
        this.articleService.getArticles(type)
            .subscribe(
            articles => this.articles = articles,
            error => this.errorMessage = <any>error)
    }

    selectArticle(article: Article): void {
        this.selectedArticle = article;
    }
}