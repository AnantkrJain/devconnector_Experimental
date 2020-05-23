import { Component, OnInit } from "@angular/core";

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log("outside the app component");
if (localStorage.jwtToken) {
  let currentTime = Date.now() / 1000;
  if (currentUser.exp < currentTime) {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("currentUser");
    window.location.href = "/auth/login";
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("inside the init method");
  }
  title = "client";
}
