import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public user = {
    name: "",
    username: "",
    telefone: "",
    website: "",
    img: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpServiceProvider,
    public toastCtrl: ToastController,
    public camera: Camera,
    public authService: AuthProvider) {

  }

  ionViewCanEnter() {
    return this.authService.userIsLogged();
  }

  saveUser(user) {
    try{
      // let headers = new HttpHeaders();
      // headers.append('Content-Type', 'application/json')
      // let options = new HttpRequest({ headers: headers }, )
      // this.http.post(this.url + '/users', user, {})
      //          .map(res => { res })
      //          .subscribe(data => console.log(data));
      this.http.save('users', user).then((response) => response.json()).then((json) => console.log(json));
      const toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000
      });
      toast.present();

    } catch (e){
      console.log(e)
    }
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.user.img = base64Image;
    }, (err) => {
      console.log(err)
    });
  }
}
