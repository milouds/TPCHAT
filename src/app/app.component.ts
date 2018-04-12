import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';

const configa = {
  apiKey: "AIzaSyDuJnM3WbUiLq-NR2K8JQh-BpQnVlxP4ng",
  authDomain: "chat-d537f.firebaseapp.com",
  databaseURL: "https://chat-d537f.firebaseio.com",
  projectId: "chat-d537f",
  storageBucket: "chat-d537f.appspot.com",
  messagingSenderId: "645315303158"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(configa);
  }

}

