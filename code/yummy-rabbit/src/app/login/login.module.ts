import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { AuthenticationService } from '../core/authentication';


@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthenticationService]
})
export class LoginModule { }