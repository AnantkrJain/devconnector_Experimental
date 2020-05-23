import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendordashboardRoutingModule } from './vendordashboard-routing.module';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [VendorComponent],
  imports: [
    CommonModule,
    VendordashboardRoutingModule
  ]
})
export class VendordashboardModule { }
