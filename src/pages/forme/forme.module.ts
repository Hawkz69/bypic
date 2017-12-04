import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormePage } from './forme';

@NgModule({
  declarations: [
    FormePage,
  ],
  imports: [
    IonicPageModule.forChild(FormePage),
  ]
})
export class FormePageModule {}
