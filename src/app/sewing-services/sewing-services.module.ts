import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SewingServicesRoutingModule } from './sewing-services-routing.module';
import { SewingServicepageComponent } from './sewing-servicepage/sewing-servicepage.component';


@NgModule({
  declarations: [
    SewingServicepageComponent
  ],
  imports: [
    CommonModule,
    SewingServicesRoutingModule
  ]
})
export class SewingServicesModule { }
