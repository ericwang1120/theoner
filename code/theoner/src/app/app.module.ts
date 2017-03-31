import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { fakeBackendProvider } from './core/helpers/fack-backend';
import { AlertService } from './shared/alert/alert.service';

import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';
import { SupportModule } from './support/support.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),

    RegisterModule,
    LoginModule,
    AboutModule,
    HomeModule,
    ProductModule,
    ServiceModule,
    SupportModule,
    SharedModule.forRoot()
  ],
  providers: [
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    BaseRequestOptions,
    //providers used to provide alerts
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
