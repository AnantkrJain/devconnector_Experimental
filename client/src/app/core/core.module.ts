import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LandingComponent } from "./layout/landing/landing.component";
import { DataService } from "./services/data.service";
import { UtilsService } from "./services/utils.service";
import { AuthGuard } from "./guard/auth.guard";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./interceptors/error-interceptor";
import { JwtInterceptor } from "./interceptors/jwt-interceptor";

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LandingComponent],
  providers: [
    DataService,
    UtilsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, HttpClientModule, CoreRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
