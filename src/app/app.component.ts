import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-login-template';

  constructor( private authService: AuthService,
    private router: Router){

  }

  get isLoggedIn():boolean{
    //console.log('AppComponent : isLoggedIn() : ' + this.authService.isLoggedIn);
    return this.authService.isLoggedIn;
  }

  logout():void{
    this.authService.logout();
    //console.log('AppComponent : logout()');
    this.router.navigateByUrl('/login');
  }
}
