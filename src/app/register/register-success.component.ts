import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterSuccessComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
  user: any;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
      console.log('inside RegisterSuccessComponent ngOnInit')
  }
}