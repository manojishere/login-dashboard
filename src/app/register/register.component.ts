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
      firstName : [''],
      lastName : [''],
      password : [''],
      email : [''],
      role : ['']
    })
  }

  onSubmit(){
    /*
    this.userCreated.userName = this.form.get('userName')?.value;
    this.userCreated.password = this.form.get('password')?.value;
    this.userCreated.email = this.form.get('email')?.value;
    this.userCreated.role = this.form.get('userRole')?.value;
    */

    
    console.log('RegisterComponent onSubmit :' + this.form.value)
    this.userCreated = Object.assign( this.userCreated, this.form.value);
    console.log('userCreated : ' + this.userCreated.email);
    localStorage.setItem('user', JSON.stringify( this.userCreated ) );
    this.router.navigateByUrl('/registersuccess');

  }

  /*
  addUsers( user: User){
    let users = [];
    if( localStorage.getItem('listOfUsers')){
      users = JSON.parse( localStorage.getItem ( "listOfUsers'") || '[]');
      users = [user, ...users];
    }else{
      users = [user];
    }
    localStorage.setItem('listOfUsers', JSON.stringify( users ));
  }
  */
  

}