import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';

export const config = {
  apiKey: "AIzaSyCVdwxVE1V252Eix5FohJOaBmTIVXBUgV0",
  authDomain: "ionicimageupload-61957.firebaseapp.com",
  databaseURL: "https://ionicimageupload-61957.firebaseio.com",
  projectId: "ionicimageupload-61957",
  storageBucket: "ionicimageupload-61957.appspot.com",
  messagingSenderId: "378294305527"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider
  ]
})
export class AppModule {}
