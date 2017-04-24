import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImageUploadComponent } from './image-upload.component';
import { UploadAreaComponent } from './upload-area/upload-area.component';
import { PreviewAreaComponent } from './preview-area/preview-area.component';

import { SharedModule } from '../shared';

import { ImageUploadRoutingModule } from './image-upload-routing.module';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


@NgModule({
  imports: [CommonModule, ImageUploadRoutingModule, FormsModule, NgbModule, SharedModule],
  declarations: [PreviewAreaComponent, UploadAreaComponent, ImageUploadComponent, FileSelectDirective, FileDropDirective],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule { }