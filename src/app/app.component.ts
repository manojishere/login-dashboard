import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-dashboard';

  constructor( private authService: AuthService,
    private router: Router){

  }

  get isLoggedIn():boolean{
    //console.log('AppComponent : isLoggedIn() : ' + this.authService.isLoggedIn);
    return this.authService.isLoggedIn;
  }

  get loggedInUserName():string{
    let user: User;
    if( this.isLoggedIn ){
      user = this.authService.loggedInUser;
      return user.userName;
    }
    return "";
  }

  logout():void{
    this.authService.logout();
    //console.log('AppComponent : logout()');
    this.router.navigateByUrl('/login');
  }
}
