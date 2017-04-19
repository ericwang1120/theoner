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
  selectedArticle: Article;
  articles: Article[];
  submitType = "create";
  errorMessage: String;

  constructor(
    private articleService: ArticleService,
    private alertService: AlertService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.defaultSelect();
    this.getArticles('all');
  }

  defaultSelect() {
    this.selectedArticle = new Article();
    this.selectedArticle.type = "product";
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
        this.getArticles('all');
        this.defaultSelect();
      },
      error => {
        this.alertService.error("fail");
      },
      () => {
      });
  }

  updateArticle(article: Article) {
    this.articleService.updateArticle(article)
      .subscribe(
      data => {
        this.alertService.success("success");
      },
      error => {
        this.alertService.error("fail");
      },
      () => {
      }
      );
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article)
      .subscribe(
      data => {
        this.alertService.success("success");
        this.getArticles('all');
        this.defaultSelect();
      },
      error => {
        this.alertService.error("fail");
      },
      () => {
      });
  }

  //Used by users click on add button
  addArticle(): void {
    this.defaultSelect();
  }

  //Used by users when selecting an article
  selectArticle(article: Article): void {
    this.selectedArticle = article;
  }

  //Used by users when clicking OK
  confirmSubmit() {
    switch (this.submitType) {
      case ("create"): { this.createArticle(this.selectedArticle); break; }
      case ("update"): { this.updateArticle(this.selectedArticle); break; }
      case ("delete"): { this.deleteArticle(this.selectedArticle); break; }
    }
  }

  onSubmit(e) {
    if (this.articles.indexOf(this.selectedArticle) !== -1) {
      this.submitType = "update";
    } else {
      this.submitType = "create";
    }
  }

  //Open confirm model
  modalTitle: string;
  open(modal, type: string) {
    this.modalService.open(modal);
    this.modalTitle = this.setModalTitle(type);
  }

  //Set Model Title based on submitType
  setModalTitle(type: any) {
    let modalTitleMap = {
      "create": "Create Article",
      "update": "Update Article",
      "delete": "Delete Article",
    };
    return modalTitleMap[type];
  }

  fileChange(event) {
    this.articleService.uploadImages(event);
  }
}