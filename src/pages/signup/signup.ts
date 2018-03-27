import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import * as firebase from 'firebase';
import { HomePage } from '../home/home'
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersserviceProvider]
})
export class SignupPage {

  public skills: string;
  public email: string;
  public phone: string;
  public password: any;
  public first_name: any;
  public last_name: any;
  public city: any;
  public state: any;
  public isJobSeeker: boolean;
  public country: any;

  constructor(public usersService: UsersserviceProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup(){

      //create an object account
      var account ={
        first_name : this.first_name,
        last_name : this.last_name || '',
        skills: this.skills || '',
        email: this.email,
        phone: this.phone || '',
        password: this.password ||'',
        city: this.city || '',
        state: this.state ||'',
        country: this.country || '',
        isJobSeeker: this.country || ''


      };

      var that = this;

      var loader = this.loadingCtrl.create({
        content: 'Please wait...',
        //duration: 3000
      });
      loader.present();


      this.usersService.signupUserService(account).then(authData =>{
        //succesful
        loader.dismiss();
        that.navCtrl.setRoot(HomePage);
      }, error=>{
        //unable to log in
        let toast = this.toastCtrl.create({
          message: error,
          position: 'top',
          duration: 3000
        });
        toast.present();


        that.password ="" //empty the password field

      });


  }

}
