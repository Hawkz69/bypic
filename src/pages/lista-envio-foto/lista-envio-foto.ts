import { BypicPage } from './../bypic/bypic';
import { CameraPage } from './../camera/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ListaEnvioFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-envio-foto',
  templateUrl: 'lista-envio-foto.html',
})
export class ListaEnvioFotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEnvioFotoPage');
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Foto enviada',
      subTitle: 'Seu momento foi enviado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
    //this.navCtrl.pop();
    this.navCtrl.push(BypicPage);
   

  }


}
