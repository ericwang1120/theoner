import { Component } from '@angular/core';  
import { ArticleFormComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'yummy-product',
  templateUrl: '../shared/article-form/article-form.component.html',
  styleUrls: ['../shared/article-form/article-form.component.css'],
})
export class ProductComponent extends ArticleFormComponent {
  ngOnInit(): void {
    this.getArticles('product');
  }
}