import { Component } from '@angular/core';

import { ArticleService } from '../core/article'
import { ArticleFormComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'yummy-service',
  templateUrl: '../shared/article-form/article-form.component.html',
  styleUrls: ['../shared/article-form/article-form.component.css'],
})
export class ServiceComponent extends ArticleFormComponent{
  ngOnInit(): void {
    this.getArticles('service');
  }
}