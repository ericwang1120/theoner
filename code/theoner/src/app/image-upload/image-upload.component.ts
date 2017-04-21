import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Article, ArticleService } from '../core/article';
import { Image, ImageService } from '../core/image'

import { AlertService } from '../shared/alert/alert.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';


const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  moduleId: module.id,
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css'],
  providers: [ArticleService, ImageService],
})

export class ImageUploadComponent {
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}