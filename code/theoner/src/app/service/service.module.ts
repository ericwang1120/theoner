import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  imports: [CommonModule, ServiceRoutingModule],
  declarations: [ServiceComponent],
  exports: [ServiceComponent]
})
export class ServiceModule { }