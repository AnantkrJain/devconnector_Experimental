import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import { UtilsService } from "src/app/core/services/utils.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: any = {};
  error: any = {};
  flag: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private utils: UtilsService
  ) {}

  ngOnInit() {}
  loginSubmit() {
    console.log(JSON.stringify(this.user));

    this.authService.loginUser(this.user).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        // it should route us to login page..

        console.log(res.token);
        let decodedValue = jwt_decode(res.token);
        localStorage.setItem("jwtToken", res.token);
        localStorage.setItem("currentUser", JSON.stringify(decodedValue));
        console.log(decodedValue);

        this.utils.authSubject.next(true);
        this.router.navigate(["/dashboard/"]);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }
}
