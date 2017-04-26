import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Image, ImageService } from '../../core/image'

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

declare const API_URL;

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  moduleId: module.id,
  selector: 'preview-area',
  templateUrl: 'preview-area.component.html',
  styleUrls: ['preview-area.component.css'],
})

export class PreviewAreaComponent implements OnInit {
  images: Image[];
  errorMessage: String;
  storageUrl=API_URL+'storage/';


  constructor(private imageService: ImageService) {

  }

  ngOnInit() {
    this.imageService.getImages().subscribe(
      images =>this.images = images,
      error => this.errorMessage = <any>error,
    )
  }
}