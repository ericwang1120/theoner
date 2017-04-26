import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { Article, ArticleService } from '../../core/article';
import { Image, ImageService } from '../../core/image'

import { AlertService } from '../../shared/alert/alert.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FileUploader, FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload';

import { Headers, Http, Response, RequestOptions } from '@angular/http';


declare var API_URL: string;

@Component({
  moduleId: module.id,
  selector: 'upload-area',
  templateUrl: 'upload-area.component.html',
  styleUrls: ['upload-area.component.css'],
})

export class UploadAreaComponent {
  public uploader: FileUploader = new FileUploader({ url: API_URL + "api/image" });
  errorMessage: String;


  constructor(private imageService: ImageService, private router: Router) {

  }

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public callBackTest(callBack: () => void) {
    callBack();
  }

  public checkResponse(item: any) {
    // this.imageService.createImage(item).subscribe(
    //   image => this.errorMessage = image,
    //   error => this.errorMessage = <any>error,
    // );
    item.upload();
  }

  reloadImages() {
    console.log("111");
  }
}
