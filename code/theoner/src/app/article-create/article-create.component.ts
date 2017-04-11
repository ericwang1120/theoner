import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../core/article'
import { AlertService } from '../shared/alert/alert.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  submitFunction = "create";

  errorMessage: String;

  constructor(
    private articleService: ArticleService,
    private alertService: AlertService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.selectedArticle.type = "product";
    this.getArticles('all');
  }

  // Call service funtions
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

  updateArticle() {

  }

  deleteArticle() {

  }
  //Used by users on selecting an article
  selectArticle(article: Article): void {
    this.selectedArticle = article;
  }

  //Used by users on clicking OK
  confirmSubmit() {
    switch (this.submitFunction) {
      case ("create"): this.createArticle(this.selectedArticle);
    }
  }

  onSubmit(e) {
    if (this.articles.indexOf(this.selectedArticle) !== -1) {
      this.submitFunction = "update";
    } else {
      this.submitFunction = "create";
    }
  }
  //Open delete model
  modalTitle: string;
  open(modal, type: string) {
    this.modalService.open(modal);
    this.modalTitle = this.setModalTitle(type);
  }

  setModalTitle(type: any) {
    let modalTitleMap = {
      "create": "Create Article",
      "update": "Update Article",
      "delete": "Delete Article",
    };
    return modalTitleMap[type];
  }


}