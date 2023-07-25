import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "src/app/interfaces";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAuthentificated: boolean = false;
  error: boolean = false;
  fakeUser: IUser = { email: "user@mail.ru", password: "user1234" };

  constructor(private router: Router) {
    const isAuthenticated = localStorage.getItem("isAuthentificated");
    this.isAuthentificated = isAuthenticated === "true";
  }

  login(user: IUser) {
    if (
      user.email === this.fakeUser.email &&
      user.password === this.fakeUser.password
    ) {
      this.isAuthentificated = true;
      console.log(this.isAuthentificated);
      localStorage.setItem("isAuthentificated", "true");
      this.router.navigate(["/news"]);
      if (this.error === true) {
        this.error = false;
      }
    } else {
      this.error = true;
    }
  }

  logout() {
    this.isAuthentificated = false;
    localStorage.clear();
  }
}
