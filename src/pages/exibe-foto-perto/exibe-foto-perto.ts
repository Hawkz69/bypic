
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExibeFotoPertoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-foto-perto',
  templateUrl: 'exibe-foto-perto.html',
})
export class ExibeFotoPertoPage {

  cont = 0;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 

  Pulafoto(cont){
    
    var imgs = [];
    imgs = [
      "assets/imgs/logo.png",
      "assets/imgs/img1.jpg",
      "assets/imgs/img2.jpg",
      "assets/imgs/img4.jpg"
    ];

    if (imgs.length == this.cont){
      this.navCtrl.pop();

    } else {
      var img = document.getElementById('imagem')  as HTMLImageElement;
      img.src = imgs[this.cont];

      this.cont++;
      console.log(this.cont);
    }

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExibeFotoPertoPage');
    // setInterval(this.Pulafoto,  3000);
  }

}
