import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VendorComponent } from "./vendor/vendor.component";

const routes: Routes = [
  {
    path: "",
    component: VendorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendordashboardRoutingModule {}
