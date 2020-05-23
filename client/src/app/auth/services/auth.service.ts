import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const headerOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  api: string = "/api/users/";
  //internally it will provide the instance of httpclient
  //this is called dependency injection
  constructor(private http: HttpClient) {}

  //end point: /api/users/register
  //method: post
  //error: yes
  //success: will get the user details with id spec

  registerUser(register): Observable<any> {
    //this,http.post(api, data, headers)
    return this.http.post(this.api + "register", register, headerOptions);
  }
  loginUser(login): Observable<any> {
    //this,http.post(api, data, headers)
    return this.http.post(this.api + "login", login, headerOptions);
  }
}
