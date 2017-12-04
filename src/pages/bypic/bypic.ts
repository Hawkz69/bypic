import { ExibeFotoPertoPage } from './../exibe-foto-perto/exibe-foto-perto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BypicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bypic',
  templateUrl: 'bypic.html',
})
export class BypicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BypicPage');
  }

  ChamaFotoPerto() : void{
    this.navCtrl.push(ExibeFotoPertoPage);
}

}
