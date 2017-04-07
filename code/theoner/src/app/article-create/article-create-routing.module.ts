import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article-create.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'article-create', component: ArticleCreateComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ArticleCreateRoutingModule { }