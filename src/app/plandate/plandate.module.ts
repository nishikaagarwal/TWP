import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlandatePageRoutingModule } from './plandate-routing.module';

import { PlandatePage } from './plandate.page';
import { PlanPopupComponent } from '../plan-popup/plan-popup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlandatePageRoutingModule
  ],
  entryComponents: [PlanPopupComponent],
  declarations: [PlandatePage, PlanPopupComponent]
})
export class PlandatePageModule {}
