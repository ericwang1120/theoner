import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article-create.component';

import { AuthGuard } from '../core/authentication/index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'article-create', component: ArticleCreateComponent,canActivate:[AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class ArticleCreateRoutingModule { }