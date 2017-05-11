import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[prevent-double-submit]'
})
export class PreventDoubleSubmit {

    @HostBinding() disabled: boolean = false;

    @HostListener('click')
    onClick() {
        this.disabled = true;
    }
}
