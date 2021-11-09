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
  currentUser: any;

  constructor() { }

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

  get isLoggedIn():boolean {
    console.log('isLoggedIn + ' + !!this.currentUser)
    return !!this.currentUser;
  }

  logout():void{
    this.currentUser = null;
  }
}
