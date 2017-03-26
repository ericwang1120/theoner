import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ArticleFormComponent } from './article-form/article-form.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent,ToolbarComponent,ArticleFormComponent],
  exports: [NavbarComponent,ToolbarComponent,ArticleFormComponent,CommonModule, FormsModule, RouterModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}