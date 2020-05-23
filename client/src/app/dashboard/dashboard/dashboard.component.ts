import { Component, OnInit } from "@angular/core";
import { UtilsService } from "src/app/core/services/utils.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  user: any = {};
  constructor(private utils: UtilsService) {}

  ngOnInit() {
    //  this.user = this.utils.getDecodedValues();
  }
}
