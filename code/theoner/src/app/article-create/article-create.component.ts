import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../core/article';
import { Image, ImageService } from '../core/image'

import { AlertService } from '../shared/alert/alert.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

declare var API_URL: string;

@Component({
  moduleId: module.id,
  selector: 'article-create',
  templateUrl: 'article-create.component.html',
  styleUrls: ['article-create.component.css'],
  providers: [ArticleService, ImageService]
})
export class ArticleCreateComponent implements OnInit {
  storageUrl = API_URL + 'storage/';

  selectedArticle: Article;
  images: Image[];
  imageData: FormData = new FormData();
  articles: Article[];
  submitType = "create";
  errorMessage: String;

  constructor(
    private articleService: ArticleService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private imageService: ImageService) { }

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

  //Get images by selected article
  getImages(article: Article): void {
    this.imageService.getImages()
      .subscribe(
      images => {
      this.images = images;
      },
      error => this.errorMessage = <any>error,
    )
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

  //Open model
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
      "left": "Choose Left Image",
      "right": "Choose Right Image",
    };
    return modalTitleMap[type];
  }
}