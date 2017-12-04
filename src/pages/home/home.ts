import { LoginPage } from './../login/login';
import { CadastroPage } from './../cadastro/cadastro';
import { FormePage } from './../forme/forme';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ChamaHome() : void{
      this.navCtrl.push(FormePage);
  }

  ChamaCadastro() : void{
    this.navCtrl.push(CadastroPage);
}

ChamaLogin() : void{
  this.navCtrl.push(LoginPage);
}

}
