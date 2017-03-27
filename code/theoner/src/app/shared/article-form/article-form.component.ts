import { Component } from '@angular/core'
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../../core/article'

@Component({
    moduleId: module.id,
    selector: 'article-form',
    templateUrl: 'article-form.component.html',
    styleUrls: ['article-form.component.css'],
    providers: [ArticleService]
})

export class ArticleFormComponent implements OnInit {
    articles: Article[];
    selectedArticle: Article;
    errorMessage: String;

    constructor(private articleService: ArticleService) {
    }

    ngOnInit(): void {
        this.getArticles('article');
    }

    getArticles(type:string): void {
        this.articleService.getArticles(type)
            .subscribe(
            articles => this.articles = articles,
            error => this.errorMessage = <any>error)
    }

    selectArticle(article: Article): void {
        this.selectedArticle = article;
    }
}