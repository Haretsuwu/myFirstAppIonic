import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users: any;

  constructor(
    public navCtrl: NavController,
    public http: HttpServiceProvider
    ) {
      this.http.getAll('users').subscribe(data => this.users = data);

  }

  getUserInfo(id) {
    this.navCtrl.push(TestPage,
      {
        'user_id': id
      })
  }

}
