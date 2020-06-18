import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgoalsPageRoutingModule } from './addgoals-routing.module';

import { AddgoalsPage } from './addgoals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgoalsPageRoutingModule
  ],
  declarations: [AddgoalsPage]
})
export class AddgoalsPageModule {}
