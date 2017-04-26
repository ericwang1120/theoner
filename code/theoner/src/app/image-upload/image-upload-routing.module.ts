import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload.component';

import { AuthGuard } from '../core/authentication/index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'image-upload', component: ImageUploadComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class ImageUploadRoutingModule { }