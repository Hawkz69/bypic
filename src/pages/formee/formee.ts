import { CcountPage } from './../ccount/ccount';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

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
  map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private googleMaps: GoogleMaps) {
  }

  lat : String;
  lon : String;
  
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

  ngAfterViewInit() {
    this.loadMap();
    }


   loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: lon
        },
        zoom: 18,
        tilt: 30
      }
    };
    let element: HTMLElement = document.getElementById('map');
    //let map: GoogleMap = this.googleMaps.create(element);
    this.map = GoogleMaps.create(element, mapOptions);


    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: lat,
              lng: lon
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }

}
