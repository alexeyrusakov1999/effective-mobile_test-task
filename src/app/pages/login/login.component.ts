import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  submit() {
    if (this.form.invalid) return;

    const user: IUser = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.authService.login(user);
    this.form.reset();
  }
}
