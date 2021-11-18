import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login-dashboard';

  loggedInUser!: User;

  constructor( private authService: AuthService,
    private router: Router){

  }
  ngOnInit(): void {
    this.loggedInUser = this.authService.loggedInUser;
  }

  get loggedInUserRole(): string{
    //console.log('loggedInUserRole : ' + this.authService.loggedInUser.role);
    let user: User;
    if( this.authService.loggedInUser ){
      user = this.authService.loggedInUser;
      console.log('user role : ' + user.role);
      return user.role;
    }
    return "";
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
