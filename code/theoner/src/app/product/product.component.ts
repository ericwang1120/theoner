import { Component } from '@angular/core';

import { ArticleService } from '../core/article'
import { ImageService } from '../core/image'

import { ArticleFormComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'theoner-product',
  templateUrl: '../shared/article-form/article-form.component.html',
  styleUrls: ['../shared/article-form/article-form.component.css'],
  providers: [ArticleService,ImageService]

})
export class ProductComponent extends ArticleFormComponent {
  ngOnInit(): void {
    this.getArticles('product');
  }
}