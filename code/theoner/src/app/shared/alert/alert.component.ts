import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { AlertService } from './alert.service';

@Component({
    moduleId: module.id,
    selector: 'theoner-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ["alert.component.css"],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            state('out', style({ opacity: 0, transform: 'translateX(-100%)' })),
            transition('* => in', [style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }), animate('0.3s ease-in')]),
            transition('in => *', [
                animate('0.3s ease-out', style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }))
            ])
        ])
    ]

})

export class AlertComponent {
    message: any;
    status: string;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
            this.message = message;
            this.status = "in";
            setTimeout(() => {
                this.status = "out";
            }, 2000);
        });
    }
}