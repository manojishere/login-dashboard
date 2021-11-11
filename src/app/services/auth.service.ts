import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*
  currentUser : User = {
    id:'1',
    username:'manojishere',
    password:'admin',
    firstName:'Manoj',
    lastName:'Singh',
    token:''
  }
  */
 loggedUser: User = new User();

  constructor() { }

  createUser( user: User){
    //console.log('AuthService createUser : ' + user.email);
    localStorage.setItem('user', JSON.stringify( user ) );
  }

  getRegisteredUser() : User{
    //console.log('AuthService getRegisteredUser');
    /*
    const userJson = localStorage.getItem('currentUser');
    this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
    */
    return JSON.parse(localStorage.getItem('user') || '{}');

  }

  get loggedInUser() : User{
    //console.log('AuthService get loggedInUser');
    return this.loggedUser;

  } 

  login(userName:string, password:string) : void{
   // console.log('AuthService.login : ' + userName + ' : ' +password)
    let registeredUser:User
    registeredUser = JSON.parse(localStorage.getItem('user') || '{}');
    //console.log('inside login registered user  : ' + registeredUser?.userName + ' : ' + registeredUser?.password);
    if(userName == registeredUser?.userName  && password == registeredUser?.password){
      this.loggedUser = registeredUser;
     // console.log('AuthService.login matched');
    }else{
      //console.log('AuthService.login does not match')
    }
   
  }

  /*
  login(userName:string, password:string) : void{
    console.log('inside login service')
    if(userName =='manojishere' && password == 'admin'){
      this.currentUser = new User();
      this.currentUser.userName = userName;
      this.currentUser.password = password;
      this.currentUser.firstName = 'Manoj';
      this.currentUser.lastName = 'Singh';
      this.currentUser.token = '2222';
      console.log('inside login service matched')
    }
    console.log('finished')
  }
  */

  get isLoggedIn():boolean {
    
    //console.log('isLoggedIn + ' + !!this.loggedUser?.userName)
    return !!this.loggedUser.userName;
  }

  logout():void{
    localStorage.removeItem( 'user' );
    this.loggedUser = new User();
  }
}
