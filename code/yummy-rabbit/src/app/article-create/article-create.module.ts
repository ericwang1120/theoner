import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleCreateComponent } from './article-create.component';
import { SharedModule } from '../shared';

import { ArticleCreateRoutingModule } from './article-create-routing.module';

import { PreventDoubleSubmit } from './prevent-double-submit.directive';

@NgModule({
  imports: [CommonModule, ArticleCreateRoutingModule, FormsModule, SharedModule],
  declarations: [ArticleCreateComponent, PreventDoubleSubmit],
  exports: [ArticleCreateComponent]
})
export class ArticleCreateModule { }