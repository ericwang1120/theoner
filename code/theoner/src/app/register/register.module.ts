import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

import { UserService } from '../core/user';


@NgModule({
    imports: [CommonModule, RegisterRoutingModule, FormsModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    providers: [UserService]
})
export class RegisterModule {
}