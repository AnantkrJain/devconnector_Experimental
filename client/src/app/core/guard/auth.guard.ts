import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    //check for the token, got or not?
    if (window.localStorage.getItem("jwtToken")) {
      //check for validity of token, valid or not?
      let currentTime = Date.now() / 1000;
      let currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

      if (!(currentUser.exp < currentTime)) {
        return true;
      } else {
        //token is invalid
        this.router.navigate(["/auth/login"]);
        return false;
      }
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}
