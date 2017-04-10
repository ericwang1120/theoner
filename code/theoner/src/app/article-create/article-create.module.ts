import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ArticleCreateComponent } from './article-create.component';
import { ArticleCreateRoutingModule } from './article-create-routing.module';

@NgModule({
  imports: [CommonModule, ArticleCreateRoutingModule,FormsModule],
  declarations: [ArticleCreateComponent],
  exports: [ArticleCreateComponent]
})
export class ArticleCreateModule { }