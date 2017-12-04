import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormeePage } from './formee';

@NgModule({
  declarations: [
    FormeePage,
  ],
  imports: [
    IonicPageModule.forChild(FormeePage),
  ],
})
export class FormeePageModule {}
