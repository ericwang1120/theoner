import { Component } from '@angular/core';
import { ArticleFormComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'theoner-about',
  templateUrl: '../shared/article-form/article-form.component.html',
  styleUrls: ['../shared/article-form/article-form.component.css'],
})
export class AboutComponent extends ArticleFormComponent {
  ngOnInit(): void {
    this.getArticles('about');
  }
}