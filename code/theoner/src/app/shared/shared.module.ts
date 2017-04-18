import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AlertComponent } from './alert/alert.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [NavbarComponent, ToolbarComponent, ArticleFormComponent, AlertComponent, FooterComponent],
  exports: [NavbarComponent, ToolbarComponent, ArticleFormComponent, AlertComponent, FooterComponent, CommonModule, FormsModule, RouterModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}