import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImageUploadComponent } from './image-upload.component';
import { SharedModule } from '../shared';

import { ImageUploadRoutingModule } from './image-upload-routing.module';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


@NgModule({
  imports: [CommonModule, ImageUploadRoutingModule, FormsModule, SharedModule],
  declarations: [ImageUploadComponent, FileSelectDirective, FileDropDirective],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule { }