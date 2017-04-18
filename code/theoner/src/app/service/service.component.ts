import { Component } from '@angular/core';

import { ArticleService } from '../core/article'
import { ArticleFormComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'theoner-service',
  templateUrl: '../shared/article-form/article-form.component.html',
  styleUrls: ['service.component.css'],
  providers: [ArticleService]

})
export class ServiceComponent extends ArticleFormComponent{
  ngOnInit(): void {
    this.getArticles('service');
  }
}