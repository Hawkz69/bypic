import { HomePage } from './../home/home';
import { CameraPage } from './../camera/camera';
import { LoginPage } from './../login/login';
import { CcountPage } from './../ccount/ccount';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FormePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forme',
  templateUrl: 'forme.html'
})
export class FormePage {
  tabBarElement: any;

  bypicRoot = 'BypicPage'
  cameraRoot = 'CameraPage'
  chatRoot = 'ChatPage'
  formeeRoot = 'FormeePage'
  ccountRoot = 'CcountPage'


  constructor(public navCtrl: NavController) {

  }

  ChamaConta() : void{
    this.navCtrl.push(CcountPage);
  }

  Logoff() : void{
    this.navCtrl.push(HomePage);
  }


  
}
