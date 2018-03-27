import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersserviceProvider]
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public usersService: UsersserviceProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  submitLogin(){
    var that = this;

    var loader = this.loadingCtrl.create({
        //add content that would display
        content: "Please wait..."
    });
    loader.present();

    this.usersService.loginUserService(this.email, this.password).then(authdata=>{
      //successfull
      //dismiss the loader
      loader.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, error=>{
      //dismiss the loader again
      loader.dismiss();
      //unable to login
      let toast = this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'top'
      });
      toast.present();

      that.password = "" //empty the password field
    }
  );
  }

  forgotPassword(){

  }

  redirectToSignup(){
    this.navCtrl.push(SignupPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
