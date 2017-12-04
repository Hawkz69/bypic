import { CcountPage } from './../ccount/ccount';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the FormeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formee',
  templateUrl: 'formee.html',
})
export class FormeePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  
  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((resp) => {
      var lat = resp.coords.latitude;
      var lon = resp.coords.longitude;
       console.log(resp.coords.latitude);
       console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
