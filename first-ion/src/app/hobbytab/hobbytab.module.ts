import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HobbytabPageRoutingModule } from './hobbytab-routing.module';

import { HobbytabPage } from './hobbytab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HobbytabPageRoutingModule
  ],
  declarations: [HobbytabPage]
})
export class HobbytabPageModule {}
