import { Geolocation } from '@ionic-native/geolocation';
import { FormePageModule } from './../pages/forme/forme.module';
import { LoginPageModule } from './../pages/login/login.module';
import { LoginPage } from './../pages/login/login';
import { ListaEnvioFotoPageModule } from './../pages/lista-envio-foto/lista-envio-foto.module';
import { ListaEnvioFotoPage } from './../pages/lista-envio-foto/lista-envio-foto';

import { ExibeFotoPertoPageModule } from './../pages/exibe-foto-perto/exibe-foto-perto.module';
import { CadastroPageModule } from './../pages/cadastro/cadastro.module';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { ExibeFotoPertoPage } from './../pages/exibe-foto-perto/exibe-foto-perto';
import { FormeePageModule } from './../pages/formee/formee.module';
import { CcountPageModule } from './../pages/ccount/ccount.module';
import { ChatPageModule } from './../pages/chat/chat.module';
import { CameraPageModule } from './../pages/camera/camera.module';
import { BypicPageModule } from './../pages/bypic/bypic.module';
import { CcountPage } from './../pages/ccount/ccount';
import { ChatPage } from './../pages/chat/chat';
import { CameraPage } from './../pages/camera/camera';
import { BypicPage } from './../pages/bypic/bypic';
import { FormeePage } from './../pages/formee/formee';
import { FormePage } from './../pages/forme/forme';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    FormePageModule,
    LoginPageModule,
    BypicPageModule,
    CameraPageModule,
    ChatPageModule,
    CcountPageModule,
    CadastroPageModule,
    FormeePageModule,
    ListaEnvioFotoPageModule,
    ExibeFotoPertoPageModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: false,
      tabsHighlight: true,
    }
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FormePage,
    FormeePage,
    BypicPage,
    CameraPage,
    ChatPage,
    ExibeFotoPertoPage,
    CadastroPage,
    CcountPage,
    ListaEnvioFotoPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
