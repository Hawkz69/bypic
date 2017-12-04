import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEnvioFotoPage } from './lista-envio-foto';

@NgModule({
  declarations: [
    ListaEnvioFotoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEnvioFotoPage),
  ],
})
export class ListaEnvioFotoPageModule {}
