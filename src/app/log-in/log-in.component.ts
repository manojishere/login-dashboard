import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  loginInvalid:boolean= false;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,  
    private route: ActivatedRoute,
    private authService: AuthService) {

   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName : [null,[Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      password : ['']
    });
  }

  onSubmit() {
    this.loginInvalid = false;
    const userName = this.form.get('userName')?.value;
    const password = this.form.get('password')?.value;
    console.log(this.form.value);
    console.log('userName : ' + userName);
    console.log('password : ' + password);
/*
    if(this.form.invalid){
      return;
    }
    */

    this.authService.login( userName, password )
    console.log('LoginComponent : onSubmit isLoggedIn : ' + this.authService.isLoggedIn);
    if( this.authService.isLoggedIn){
      console.log("LoginComponent : onSubmit login success");
      this.router.navigateByUrl('dashboard');
    }else{
      console.log("LoginComponent : onSubmit login failed");
    }


    /*
    if(userName =='manojishere' && password == 'admin'){
      this.loginInvalid = true;

      console.log('login successful');
    }
    */

    // https://developer.okta.com/blog/2020/01/21/angular-material-login
    // https://www.positronx.io/create-login-ui-template-with-angular-8-material-design/
    // https://code-maze.com/angular-material-form-validation/
    // https://zoaibkhan.com/blog/create-a-responsive-sidebar-menu-with-angular-material/   : side menu bar
  }

}
