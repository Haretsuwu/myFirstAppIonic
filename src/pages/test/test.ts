import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public http: HttpServiceProvider) {
    let user_id = this.navParams.get('user_id');

    this.http.get('users', user_id).subscribe(data => this.user = data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
