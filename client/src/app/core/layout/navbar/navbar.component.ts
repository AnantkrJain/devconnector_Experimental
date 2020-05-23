import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { UtilsService } from "../../services/utils.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  flag: boolean = false;
  constructor(private dataService: DataService, private utils: UtilsService) {
    utils.authSubject.subscribe((data) => {
      this.flag = data;
      console.log(this.flag);
    });
  }

  ngOnInit() {
    this.utils.authSubject.subscribe((data) => {
      this.flag = data;
      console.log(this.flag);
    });
  }
}
