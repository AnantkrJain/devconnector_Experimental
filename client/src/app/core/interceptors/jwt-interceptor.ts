import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { UtilsService } from "../services/utils.service";

export class JwtInterceptor implements HttpInterceptor {
  constructor(private utilServices: UtilsService) {}
  intercept(
    request: HttpRequest<HttpEvent<any>>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // do we need to retrieve the token
    // do we need to validate the token
    // if valid et's continue
    // else redirect to login

    //let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let currentUser = this.utilServices.getCurrentUserDetails();
    if (localStorage.jwtToken) {
      let currentTime = Date.now() / 1000;
      if (currentUser.exp < currentTime) {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("currentUser");
        window.location.href = "/auth/login";
      }
    }
    return null;
  }
}
