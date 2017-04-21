import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'image-upload', component: ImageUploadComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ImageUploadRoutingModule { }