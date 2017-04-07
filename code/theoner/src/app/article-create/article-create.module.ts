import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCreateComponent } from './article-create.component';
import { ArticleCreateRoutingModule } from './article-create-routing.module';

@NgModule({
  imports: [CommonModule, ArticleCreateRoutingModule],
  declarations: [ArticleCreateComponent],
  exports: [ArticleCreateComponent]
})
export class ArticleCreateModule { }