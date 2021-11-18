import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterSuccessComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
  user!: User;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
      console.log('inside RegisterSuccessComponent ngOnInit')
      this.user = this.authService.getRegisteredUser();
      console.log( ' RegisterSuccessComponent ngOnInit role : ' + this.user.role);
      console.log( ' RegisterSuccessComponent ngOnInit token : ' + this.user.token);
  }
}