import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../core/article';
import { Image, ImageService } from '../core/image'

import { AlertService } from '../shared/alert/alert.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

declare var API_URL: string;

@Component({
  moduleId: module.id,
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css'],
})

export class ImageUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: API_URL + "api/image", authToken: "Bear " + this.getToken() });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  errorMessage: String;
  images: Image[];
  selectedImage: Image;
  storageUrl = API_URL + 'storage/';

  constructor(
    private imageService: ImageService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getImages();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public callBackTest(callBack: () => void) {
    callBack();
  }

  public getImages() {
    this.imageService.getImages().subscribe(
      images => this.images = images,
      error => this.errorMessage = <any>error,
    )
  }

  public deleteImage(image: Image) {
    this.imageService.deleteImage(image).subscribe(
      image => this.getImages(),
      error => this.errorMessage = <any>error
    )
  }

  public reloadImages() {
    setTimeout(() => this.getImages(), 1000);
  }

  //Open confirm model
  modalTitle: string;
  open(modal) {
    this.modalService.open(modal);
    this.modalTitle = "Delete Image";
  }

  confirmDelete() {
    this.deleteImage(this.selectedImage);
  }

  private getToken(): string {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.access_token) {
      return currentUser.access_token;
    }
  }
}