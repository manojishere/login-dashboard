import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
  form:FormGroup = new FormGroup({});
  userCreated: User = new User();

  constructor(private formBuilder: FormBuilder,
    private router : Router,
    private authService : AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName : [''],
      password : [''],
      email : [''],
      userRole : ['']
    })
  }

  onSubmit(){
    this.userCreated.userName = this.form.get('userName')?.value;
    this.userCreated.password = this.form.get('password')?.value;
    this.userCreated.email = this.form.get('email')?.value;
    this.userCreated.role = this.form.get('userRole')?.value;

    console.log('RegisterComponent : onSubmit : ' + this.userCreated.userName);
    console.log('RegisterComponent : onSubmit : ' + this.userCreated.password);
    console.log('RegisterComponent : onSubmit : ' + this.userCreated.email);
    console.log('RegisterComponent : onSubmit : ' + this.userCreated.role);

    this.authService.resgisterUser( this.userCreated );

    this.router.navigateByUrl('/registersuccess');

  }

}