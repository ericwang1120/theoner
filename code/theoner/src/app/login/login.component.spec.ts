import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule, BaseRequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';

import { AlertService } from '../shared/alert/alert.service';
import { AuthenticationService } from '../core/authentication';



describe('', () => {

    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpModule, FormsModule],
            declarations: [LoginComponent],
            providers: [AuthenticationService, AlertService],// declare the test component
        }).compileComponents();

    });

    it('testing login', () => {
        fixture = TestBed.createComponent(LoginComponent);

        comp = fixture.debugElement.componentInstance;
        //fixture.detectChanges();
        comp.login();
        expect(comp.loading).toBe(true);
    });

    it('testing name', () => {
        fixture = TestBed.createComponent(LoginComponent);

        comp = fixture.debugElement.componentInstance;
        //fixture.detectChanges();
        expect(comp.model.name).toBeUndefined();
    });

});
