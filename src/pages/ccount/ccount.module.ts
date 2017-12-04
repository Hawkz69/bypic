import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CcountPage } from './ccount';

@NgModule({
  declarations: [
    CcountPage,
  ],
  imports: [
    IonicPageModule.forChild(CcountPage),
  ],
})
export class CcountPageModule {}
