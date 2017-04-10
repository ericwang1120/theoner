import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../core/article'
import { AlertService } from '../shared/alert/alert.service';

@Component({
  moduleId: module.id,
  selector: 'article-create',
  templateUrl: 'article-create.component.html',
  styleUrls: ['article-create.component.css'],
  providers: [ArticleService]
})
export class ArticleCreateComponent implements OnInit {
  selectedArticle = new Article();
  articles: Article[];

  errorMessage: String;

  constructor(
    private articleService: ArticleService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.selectedArticle.type = "product";
    this.getArticles('all');
  }

  getArticles(type: string): void {
    this.articleService.getArticles(type)
      .subscribe(
      articles => this.articles = articles,
      error => this.errorMessage = <any>error)
  }

  createArticle(article: Article): void {
    this.articleService.createArticle(article)
      .subscribe(
      data => {
        this.alertService.success("success");
        this.articles.push(this.selectedArticle);
      },
      error => {
        this.alertService.error("fail");
      });
  }

  selectArticle(article: Article): void {
    this.selectedArticle = article;
  }

  onSubmit(e) {
    e.preventDefault();
    this.createArticle(this.selectedArticle);
  }
}