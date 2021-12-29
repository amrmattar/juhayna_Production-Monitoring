import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {VERSION} from '@angular/material/core';
import { NavService } from '././services/nav.service';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationService } from '../app/services/authentication.service';
import { UserService } from '../app/services/user.service';
import { User } from '../app/models/user';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from '../app/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appDrawer', {static: false}) appDrawer: ElementRef;
  version = VERSION;
  title = 'ems';
  login = false;
  users: User[];
  register = false;
  currentUser: User;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor( private navService: NavService,private userService: UserService,private router: Router,
    private authenticationService: AuthenticationService,private tokenStorageService: TokenStorageService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }
  ngOnInit(){
    this.navService.appDrawer = this.appDrawer;
    console.log(!!this.tokenStorageService.getToken());
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.router.navigate(['/en/ene2']);

      this.username = user.userCredentials.email;
    }

  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
}
}
