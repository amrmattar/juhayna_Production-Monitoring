import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login =false;
loginForm: FormGroup;
registerForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
register = false;
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';

error = '';
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,private tokenStorage: TokenStorageService) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/en/ene2']);
    }
     }
     isLoggedIn = false;
     isLoginFailed = false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  this.registerForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
});
  }

  get f() { return this.loginForm.controls; }
  get r() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.authenticationService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        (data) => {
          this.tokenStorage.saveToken(JSON.parse(JSON.stringify(data)).accessTokenResource.accessToken);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          const returnUrl =  '/en/ene2';
          this.router.navigate(['/en/ene2']);
          this.reloadPage();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );


  }

  onRegister(): void {

    this.authenticationService.register(this.r.email.value, this.r.password.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
