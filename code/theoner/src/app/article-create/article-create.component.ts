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
  article = new Article();
  errorMessage: String;

  constructor(
    private articleService: ArticleService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.article.type = "product";
  }


  createArticle(article: Article): void {
    this.articleService.createArticle(article)
      .subscribe(
      data => {
        this.alertService.success("success");
      },
      error => {
        this.alertService.error("fail");
      });
  }

  onSubmit(e) {
    e.preventDefault();
    this.createArticle(this.article);
  }
}