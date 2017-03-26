import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'service', component: ServiceComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }