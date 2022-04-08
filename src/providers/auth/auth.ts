import { HttpServiceProvider } from './../http-service/http-service';
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {
  private msg: string = 'É preciso estar logado para acessar';

  constructor(
    public http: HttpServiceProvider,
    public storage: Storage,
    public toastCtrl: ToastController
    ) {
  }

  login(credentials) {
    this.http.save('https://jsonplaceholder.typicode.com/posts', credentials)
    .then((response) => response.json())
    .then((json) => {
      return this.storage.set('token', json.token);
    }).catch(
    (error) => {
      let msg = error.json();
      const toast = this.toastCtrl.create({
        message: msg.msg,
        duration: 3000
      });
      return toast.present();
    });
  }

  userIsLogged() {
    return this.storage.get('token').then((val) => {
    if(val) {
      return val;
    } else {
      const toast = this.toastCtrl.create({
        message: this.msg,
        duration: 3000
      });
      toast.present();
      return false;
    }
    });
  }

  logout() {
    this.storage.remove('token')
  }
}
