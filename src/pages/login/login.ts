import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public credential = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider
    ) {
  }

  login() {
    this.authService.login(this.credential)
  }

  logout() {
    this.authService.logout();
  }

}
