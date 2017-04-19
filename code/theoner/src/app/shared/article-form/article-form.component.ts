import { Component } from '@angular/core'
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../../core/article'
import { Image, ImageService } from '../../core/image'

@Component({
    moduleId: module.id,
    selector: 'article-form',
    templateUrl: 'article-form.component.html',
    styleUrls: ['article-form.component.css'],
    providers: [ArticleService, ImageService]
})

export class ArticleFormComponent implements OnInit {
    articles: Article[];
    selectedArticle: Article;
    selectedImages: Image[];
    path: string;
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
        this.articleService.getImages(article)
            .subscribe(
            images => {
                this.selectedImages = images;
                this.selectedArticle = article;
                if (images[0]) {
                    this.path = "http://localhost/theoner-api/storage/" + images[0]['store_path'];
                }else{
                    this.path=null;
                }
            },
            error => this.errorMessage = <any>error,
        )
    }

    //Get images by selected article
    getImages(article: Article): void {
        this.articleService.getImages(article)
            .subscribe(
            images => this.selectedImages = images,
            error => this.errorMessage = <any>error,
        )
    }
}