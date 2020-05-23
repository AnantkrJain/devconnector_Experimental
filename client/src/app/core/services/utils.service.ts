import { Injectable } from "@angular/core";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor() {}

  setUserDetails(tokenData): void {
    let token = localStorage.getItem("jwtToken");
    let currentUserDetails = null;
    if (!token) {
      currentUserDetails = jwt_decode(tokenData);
      localStorage.setItem("jwtToken", tokenData);
      localStorage.setItem("currentUser", currentUserDetails);
    } else {
    }
  }

  getCurrentUserDetails(): any {
    return localStorage.getItem("currentUser");
  }
}
