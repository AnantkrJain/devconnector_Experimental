import { Injectable } from "@angular/core";
import { menuType } from "../utils/menuEnum";

@Injectable({
  providedIn: "root",
})
export class DataService {
  appName: string = "Imarticus Connector";
  login: string = menuType.login;
  register: string = menuType.register;
  developers: string = menuType.developers;
  constructor() {}
}
