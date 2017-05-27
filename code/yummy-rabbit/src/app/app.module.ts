import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

// import { fakeBackendProvider } from './core/helpers/fack-backend';
import { AlertService } from './shared/alert/alert.service';
import { AuthGuard } from './core/authentication/index';

import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';
import { SupportModule } from './support/support.module';
import { SharedModule } from './shared/shared.module';
import { ArticleCreateModule } from './article-create/article-create.module';
import { ImageUploadModule } from './image-upload/image-upload.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,

    RegisterModule,
    LoginModule,
    AboutModule,
    HomeModule,
    ProductModule,
    ServiceModule,
    SupportModule,
    ArticleCreateModule,
    ImageUploadModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    BaseRequestOptions,
    //providers used to provide alerts
    AlertService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
