import { Component, OnInit } from "@angular/core";
import { InnerSubscriber } from "rxjs/internal/InnerSubscriber";
import { Iuser } from "../models/iuser";

import * as _ from "underscore";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: Iuser;
  error: any = {};
  constructor(private authService: AuthService, private router: Router) {
    this.user = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  registerSubmit() {
    if (_.isEmpty(this.user.name)) {
      this.error.name = "Name should be valid";
      console.log(JSON.stringify(this.error.name));
    }
    if (_.isEmpty(this.user.email)) {
      this.error.email = "Email should be valid";
      console.log(JSON.stringify(this.error.email));
    }
    if (_.isEmpty(this.user.password)) {
      this.error.password = "password should be valid";
      console.log(JSON.stringify(this.error.password));
    }
    if (_.isEmpty(this.user.password2)) {
      this.error.password2 = "password2 should be valid";
      console.log(JSON.stringify(this.error.password2));
    }

    console.log(JSON.stringify(this.user));
    this.authService.registerUser(this.user).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        //It should route us to login page
        this.router.navigate(["/auth/login"]);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }

  ngOnInit() {}
}
