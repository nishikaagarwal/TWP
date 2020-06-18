import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TacticmodalPageRoutingModule } from './tacticmodal-routing.module';

import { TacticmodalPage } from './tacticmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TacticmodalPageRoutingModule
  ],
  declarations: [TacticmodalPage]
})
export class TacticmodalPageModule {}
